import { useState } from "react";
import "../../style/Game.css";
import Intro from "./Intro";
import {
  CardModel,
  enemiesArray,
  EnemyModel,
  heroArray,
  HeroModel,
} from "../../data/Data";
import { getDeck, shuffle } from "../helpers/Utils";
import { gameStatus } from "../types/GameTypes";
import BattleGround from "./BattleGround";
import SelectLoot from "./SelectLoot";
import EndGame from "./EndGame";

function Game() {
  const [gameState, setGameState] = useState(gameStatus.intro);
  const [heroSelected, setHeroSelected] = useState<HeroModel>(heroArray[0]);
  const [enemies, setEnemies] = useState<EnemyModel[]>(enemiesArray);
  const [currentEnemy, setCurrentEnemy] = useState<EnemyModel>(enemiesArray[0]);
  const [deck, setDeck] = useState<CardModel[]>(getDeck);
  const [hand, setHand] = useState<CardModel[]>([]);
  const [discardPile, setDiscardPile] = useState<CardModel[]>([]);
  const [turnCount, setTurnCount] = useState(0);
  const [heroMana, setHeroMana] = useState(0);

  const selectHero = (id: string) => {
    const hero = heroArray.filter((hero) => hero.id === id)[0];
    setHeroMana(hero.mana);
    setHeroSelected(hero);
  };

  const selectCard = (cardselected: CardModel) => {
    const card = currentEnemy.loot.filter((card) => card === cardselected)[0];
    const newEnemy = enemies.pop();
    setCurrentEnemy(newEnemy ? newEnemy : currentEnemy);
    setDeck((prev) => [...prev, card]);
    setHeroSelected((prev) => {
      return { ...prev, mana: heroMana, defense: 0 };
    });
    // setDiscardPile((prev) => [...prev, ...hand]);
    drawCards();
    setGameState(gameStatus.Hfighting);
  };

  const startFight = (deck: CardModel[]): void => {
    let hand: CardModel[] = deck.splice(0, heroSelected.handSize);
    setEnemies(enemies.splice(1));
    setHand(hand);
    setTurnCount((prev) => prev++);
  };

  function startGame(): void {
    if (heroSelected) {
      startFight(deck);
      setGameState(gameStatus.Hfighting);
    } else {
      window.alert("You must select a Hero");
      throw new Error("You must select a Hero");
    }
  }

  const resetGame = (): void => {
    setGameState(gameStatus.intro);
  };

  const drawCards = (): void => {
    if (deck.length < heroSelected.handSize) {
      setDiscardPile((prev) => [...prev, ...deck, ...hand]);
      setDeck((prev) => [...prev, ...discardPile]);
      setDiscardPile([]);
      setDeck((prev) => shuffle(prev));
    }
    setDiscardPile((prev) => [...prev, ...hand]);
    shuffle(deck);
    let newHand = deck.splice(0, heroSelected.handSize);
    setHand(newHand);
  };

  const useCard = (card: CardModel): string => {
    if (currentEnemy.hp === 0) {
      alert("Enemy is dead, end turn.");
      return "Enemy is dead"
    } else if (heroSelected.mana - card.cost < 0) {
      alert("Not enought mana, pick an other card or end turn");
      return "Not enought mana"
    } else if (card.type === "Defense") {
      setDiscardPile((prev) => [...prev, card]);
      setHeroSelected((prev) => {
        return {
          ...prev,
          mana: prev.mana - card.cost,
          defense: card.protection,
        };
      });
      setHand(hand.filter((item) => item.id !== card.id));
      return card.effect
    } else {
      if (currentEnemy.hp - card.damage <= 0) {
        setHeroSelected((prev) => {
          return { ...prev, mana: prev.mana - card.cost };
        });
        setCurrentEnemy((prev) => {
          return { ...prev, hp: 0 };
        });
        setDiscardPile((prev) => [...prev, card]);
      } else {
        setDiscardPile((prev) => [...prev, card]);
        setHeroSelected((prev) => {
          return { ...prev, mana: prev.mana - card.cost };
        });
        setCurrentEnemy((prev) => {
          return { ...prev, hp: prev.hp - card.damage };
        });
        setHand(hand.filter((item) => item.id !== card.id));
      }
      return card.effect
    }
  };

  const endTurn = (): void => {
    const rand = Math.random();
    const enemyDmg: number = currentEnemy.attack(rand);
    if (currentEnemy.hp === 0) {
      enemies.length
        ? setGameState(gameStatus.enemyDead)
        : setGameState(gameStatus.endGame);
    } else if (heroSelected.defense + heroSelected.hp <= enemyDmg) {
      setHeroSelected((prev) => {
        return {
          ...prev,
          hp: 0,
        };
      });
      setGameState(gameStatus.endGame);
    } else {
      setGameState(gameStatus.Efighting);
      setTimeout(() => {
        setHeroSelected((prev) => {
          return heroSelected.defense
            ? enemyDmg <= heroSelected.defense
              ? { ...prev, mana: heroMana, defense: 0 }
              : {
                  ...prev,
                  hp: prev.hp + heroSelected.defense - enemyDmg,
                  mana: heroMana,
                  defense: 0,
                }
            : { ...prev, hp: prev.hp - enemyDmg, mana: heroMana };
        });
        drawCards();
        setGameState(gameStatus.Hfighting);
      }, 1500);
    }
  };

  const gameHtml =
    gameState === gameStatus.intro ? (
      <Intro
        startGame={startGame}
        heroArray={heroArray}
        selectHero={selectHero}
        gameState={gameState}
      />
    ) : gameState === gameStatus.endGame ? (
      <EndGame heroHp={heroSelected.hp} />
    ) : gameState === gameStatus.enemyDead ? (
      <SelectLoot cards={currentEnemy.loot} action={selectCard} gameState={gameState} />
    ) : (
      <BattleGround
      resetGame={resetGame}
      heroSelected={heroSelected}
      currentEnemy={currentEnemy}
      hand={hand}
      useCard={useCard}
      endTurn={endTurn}
      discardPile={discardPile.length}
      deck={deck.length}
      gameState={gameState}
    />
    );

  return <div>{gameHtml}</div>;
}

export default Game;

import { useState } from "react";
import "../../style/Game.css";
import "../../style/Responsive.css";
import Intro from "../Intro/Intro";
import {
  CardModel,
  enemiesArray,
  EnemyModel,
  heroArray,
  HeroModel,
} from "../../data/Data";
import { getDeck, shuffle } from "../../utilities/Utils";
import { gameStatus, IMessage } from "../../types/GameTypes";
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
  const [lastCard, setLastCard] = useState<CardModel>(deck[0]);
  const [enemyInitialStats, setEnemyInitialStats] = useState(enemiesArray[0]);
  const [heroInitalStats, setHeroInitialStats] = useState(heroArray[0]);

  const selectHero = (id: string) => {
    const hero = heroArray.filter((hero) => hero.id === id)[0];
    setHeroSelected(hero);
    setHeroInitialStats(hero);
  };

  const selectCard = (cardselected: CardModel) => {
    const card = currentEnemy.loot.filter((card) => card === cardselected)[0];
    const message = {}
    const newEnemy = enemies.pop();
    newEnemy && setCurrentEnemy(newEnemy);
    newEnemy && setEnemyInitialStats(newEnemy);
    setDeck((prev) => [...prev, card]);
    setHeroSelected((prev) => {
      return { ...prev, mana: heroInitalStats.mana, defense: 0 };
    });
    // setDiscardPile((prev) => [...prev, ...hand]);
    drawCards(heroSelected.handSize);
    setGameState(gameStatus.Hfighting);
    return {}
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

  const getNewHand = (number: number): CardModel[] => {
    const newHand = deck.splice(0, number);
    return newHand;
  };

  const drawCards = (number: number): void => {
    if (deck.length <= number) {
      setDeck((prev) => shuffle([...prev, ...discardPile, ...hand]));
      setDiscardPile([]);
      setHand(getNewHand(number));
    } else {
      setDiscardPile((prev) => [...prev, ...hand]);
      setDeck((prev) => shuffle(prev));
      setHand(getNewHand(number));
    }
  };

  const useCard = (card: CardModel): IMessage => {
    const rand = Math.random();
    let message = {};
    setLastCard(card);
    if (currentEnemy.hp === 0) {
      //if enemy is dead
      alert("Enemy is dead, end turn.");
      return (message = { alert: "Enemy is dead, end turn" });
    } else if (heroSelected.mana - card.cost < 0) {
      //if hero doesn't have enought mana
      alert("Not enought mana, pick an other card or end turn");
      return (message = { alert: "Not enought mana" });
    } else if (card.type === "Defense") {
      // if defence card played
      setDiscardPile((prev) => [...prev, card]);
      setHeroSelected((prev) => {
        return {
          ...prev,
          mana: prev.mana - card.cost,
          defense: prev.defense + card.protection,
        };
      });
      setHand(hand.filter((item) => item.id !== card.id));
      return (message = { character: heroSelected.name ,anim: card.anim, defence: card.protection });
    } else if (card.type === "Attack") {
      //if enemy doesn't dodge the attack
      if (rand > currentEnemy.dodge / 100) {
        if (currentEnemy.hp - card.damage <= 0) {
          setHeroSelected((prev) => {
            return { ...prev, mana: prev.mana - card.cost };
          });
          setCurrentEnemy((prev) => {
            return { ...prev, hp: 0 };
          });
          setDiscardPile((prev) => [...prev, card]);
          setHand(hand.filter((item) => item.id !== card.id));
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
        return (message = { anim: card.anim });
      } else {
        //if enemy dodge
        setDiscardPile((prev) => [...prev, card]);
        setHeroSelected((prev) => {
          return { ...prev, mana: prev.mana - card.cost };
        });
        setHand(hand.filter((item) => item.id !== card.id));
      }
      return (message = { character: currentEnemy.name, dodged: true });
    } else if (card.type === "Utility") {
      setDiscardPile((prev) => [...prev, card]);
      setHeroSelected((prev) => {
        return { ...prev, mana: prev.mana - card.cost };
      });
      setHand(hand.filter((item) => item.id !== card.id));
    }
    return (message = { anim: card.anim });
  };

  const endTurn = () => {
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
              ? { ...prev, mana: heroInitalStats.mana, defense: 0 }
              : {
                  ...prev,
                  hp: prev.hp + heroSelected.defense - enemyDmg,
                  mana: heroInitalStats.mana,
                  defense: 0,
                }
            : { ...prev, hp: prev.hp - enemyDmg, mana: heroInitalStats.mana };
        });
        setGameState(gameStatus.Hfighting);
        drawCards(heroSelected.handSize);
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
      <SelectLoot
        cards={currentEnemy.loot}
        action={selectCard}
        gameState={gameState}
        hero={heroSelected}
      />
    ) : (
      <BattleGround
        resetGame={resetGame}
        heroSelected={heroSelected}
        initalHero={heroInitalStats}
        currentEnemy={currentEnemy}
        initialEnemy={enemyInitialStats}
        hand={hand}
        useCard={useCard}
        endTurn={endTurn}
        discardPile={discardPile.length}
        deck={deck.length}
        gameState={gameState}
        lastCard={lastCard}
      />
    );

  return <div>{gameHtml}</div>;
}

export default Game;

import { useState } from "react";
import "../../style/Game.css";
import Header from "../../layout/components/Header";
import Hero from "./Hero";
import Intro from "./Intro";
import {
  CardModel,
  enemiesArray,
  EnemyModel,
  heroArray,
  HeroModel,
} from "../../data/Data";
import { getDeck } from "../helpers/Utils";
import Enemy from "./Enemy";
import Cards from "./Cards";

function Game() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [heroSelected, setHeroSelected] = useState<HeroModel>(heroArray[0]);
  const [enemies, setEnemies] = useState<EnemyModel[]>(enemiesArray);
  const [currentEnemy, setCurrentEnemy] = useState<EnemyModel>(enemiesArray[0]);
  const [deck, setDeck] = useState<CardModel[]>([]);
  const [hand, setHand] = useState<CardModel[]>([]);
  const [discardPile, setDiscardPile] = useState<CardModel[]>([]);
  const [isFighting, setIsFighting] = useState(false);
  const [turnCount, setTurnCount] = useState(0);

  const selectHero = (id: string) => {
    const hero = heroArray.filter((hero) => hero.id === id)[0];
    setHeroSelected(hero);
  };

  const startFight = (deck: CardModel[]): void => {
    let hand: CardModel[] = deck.splice(0, heroSelected.handSize);
    setEnemies(enemies.splice(1));
    setIsFighting(true);
    setHand(hand);
    setTurnCount((prev) => prev++);
  };

  function startGame(): void {
    if (heroSelected) {
      setIsGameStarted(true);
      setDeck(getDeck);
    } else {
      window.alert("You must select a Hero");
      throw new Error("You must select a Hero");
    }
  }

  const resetGame = (): void => {
    setIsGameStarted(false);
  };

  const drawCards = (): void => {
    let hand: CardModel[] = [];
    if (deck.length > heroSelected.handSize) {
      hand = deck.splice(0, heroSelected.handSize);
    } else {
      setDeck((prev) => [...prev, ...discardPile]);
      setDiscardPile([]);
      hand = deck.splice(0, heroSelected.handSize);
    }
    setHand(hand);
  };

  const useCard = (card: CardModel): void => {
    if (currentEnemy.hp === 0) {
      alert("Enemy is dead, end turn.");
    } else if (heroSelected.mana - card.cost < 0) {
      alert("Not enought mana, pick an other card or end turn");
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
    } else {
      if (currentEnemy.hp - card.damage <= 0) {
        setHeroSelected((prev) => {
          return { ...prev, mana: prev.mana - card.cost };
        });
        setCurrentEnemy((prev) => {
          return { ...prev, hp: (prev.hp = 0) };
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
    }
  };

  const endTurn = (): void => {
    const rand = Math.random();
    const enemyDmg: number = currentEnemy.attack(rand);
    if (currentEnemy.hp === 0) {
      //set new current enemy
      const newEnemy = enemies.pop();
      setHeroSelected((prev) => {
        return { ...prev, mana: heroArray[0].mana, defense: 0 };
      });
      setCurrentEnemy(newEnemy ? newEnemy : currentEnemy);
      setDiscardPile((prev) => [...prev, ...hand]);
      drawCards();
    } else {
      setTimeout(() => {
        setDiscardPile((prev) => [...prev, ...hand]);
        setHeroSelected((prev) => {
          return heroSelected.defense
            ? enemyDmg <= heroSelected.defense
              ? { ...prev, mana: heroArray[0].mana, defense: 0 }
              : {
                  ...prev,
                  hp: prev.hp + heroSelected.defense - enemyDmg,
                  mana: heroArray[0].mana,
                  defense: 0,
                }
            : { ...prev, hp: prev.hp - enemyDmg, mana: heroArray[0].mana };
        });
        drawCards();
      }, 2000);
    }

    console.log(turnCount);
  };

  const gameHtml = isGameStarted ? (
    <div className="game-content">
      <Header resetGame={resetGame} />
      <section className="App-game-container">
        <div className="App-game-players-container">
          <h1>
            <Hero hero={heroSelected} />
          </h1>
          <h1>
            <Enemy enemies={currentEnemy} />
          </h1>
        </div>
        <div className="App-game-card-container">
          {isFighting ? (
            <div className="App-game-hand-container">
              <Cards cards={hand} useCard={useCard} />
              <button className="std-btn btn-end" onClick={endTurn}>
                End turn
              </button>
            </div>
          ) : (
            <button className="std-btn" onClick={() => startFight(deck)}>
              Fight
            </button>
          )}
        </div>
      </section>
    </div>
  ) : (
    <Intro
      startGame={startGame}
      heroArray={heroArray}
      selectHero={selectHero}
      isGameStarted={isGameStarted}
    />
  );

  return <div>{gameHtml}</div>;
}

export default Game;
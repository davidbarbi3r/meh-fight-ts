import { CardModel } from "../../cards/types/Card";
import { cardArray } from "../../cards/data/Cards";
import { EnemyModel } from "../../enemies/types/Enemy";
import { enemiesArray } from "../../enemies/data/Enemies";

export const shuffle = (array: any[]) => {
  let currentIndex = array.length;
  let randomIndex: number;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export const getDeck = (): CardModel[] => {
  const deck = [...cardArray];
  shuffle(deck);
  return deck;
};

export const getEnemies = (): EnemyModel[] => {
  const enemies = [...enemiesArray];
  shuffle(enemies);
  return enemies;
};

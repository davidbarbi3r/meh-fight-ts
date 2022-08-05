import {
  CardModel,
  EnemyModel,
  cardArray,
} from "../data/Data";

export const shuffle = (array: any[]) => {
  array.sort(function (a, b) {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  });
  return array;
};

export const getDeck = (): CardModel[] => {
  const deckArray = [...cardArray];
  shuffle(deckArray);
  return deckArray;
};



// export const selectHero = (id: string, setHero:React.SetStateAction<HeroModel>) => {
//     const hero = heroArray.filter(hero => hero.id === id)[0]
//     setHero(hero)
//   }

import { CardModel, EnnemyModel } from "../data/Data";

export const shuffle = (array: CardModel[] | EnnemyModel[]) => {
    array.sort(function(a, b){
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    })
    return array
  }


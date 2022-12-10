import { EnemyModel } from "../../enemies/types/Enemy";
import { HeroModel } from "../../heroes/types/Hero";

export interface CardModel {
  id: string;
  name: string;
  type: "Attack" | "Defense" | "Utility";
  img: string;
  damage: number;
  protection: number;
  cost: number;
  rarity: 1 | 2 | 3;
  anim: cardAnim;
}

export enum cardAnim {
  shake = "shake",
  vibrate = "vibrate",
  blackout = "blackout",
  heal = "heal",
  shield = "shield",
  buff = "buff",
  invBuff = "invBuff",
}

export class Card implements CardModel {
  constructor(
    public id: string,
    public name: string,
    public type: "Attack" | "Defense" | "Utility",
    public img: string,
    public damage: number,
    public protection: number,
    public cost: number,
    public rarity: 1 | 2 | 3,
    public anim: cardAnim
  ) {}

  public useCard(
    card: CardModel,
    setLastCard: (value: React.SetStateAction<CardModel>) => void,
    hero: HeroModel,
    enemy: EnemyModel,
    setDiscardPile: (value: React.SetStateAction<CardModel[]>) => void,
    setHeroSelected: (value: React.SetStateAction<HeroModel>) => void,
    setCurrentEnemy: (value: React.SetStateAction<EnemyModel>) => void,
    setHand: (value: React.SetStateAction<CardModel[]>) => void
  ) {}
}

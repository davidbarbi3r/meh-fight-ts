import { Card, CardModel } from "../../cards/types/Card";

export interface HeroModel {
  id: string;
  name: string;
  hp: number;
  mana: number;
  defense: number;
  img: string;
  crit: number;
  critDmg: number;
  miss: number;
  handSize: number;
  gold: number;
  isDead: boolean;
  specialCards?: Card[]; // idea for future implementation (some special cards to add to the normal deck)
}

export class Hero implements HeroModel {
  constructor(
    public id: string,
    public name: string,
    public hp: number,
    public mana: number,
    public defense: number,
    public img: string,
    public crit: number, //increase crit probability
    public critDmg: number, //increase crit damages
    public miss: number, //increase missed attack probability
    public handSize: number,
    public gold: number,
    public isDead: boolean = false
  ) {}
}

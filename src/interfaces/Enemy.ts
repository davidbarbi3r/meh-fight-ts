import { CardModel } from "./Card";

export interface EnemyModel {
  id: string;
  name: string;
  hp: number;
  defense: number;
  dmg: number;
  img: string;
  crit: number;
  critDmg: number;
  miss: number;
  dodge: number;
  dmgCalcul(arg0: number): number;
  attack: (random: number) => number;
  loot: CardModel[];
}

export class Enemy implements EnemyModel {
  constructor(
    public id: string,
    public name: string,
    public hp: number,
    public dmg: number,
    public defense: number,
    public img: string,
    public crit: number, //increase crit probability
    public critDmg: number, //increase crit damages
    public miss: number, //increase missed attack probability
    public dodge: number, //enemy can dodge hero attacks
    public loot: CardModel[]
  ) {}

  public attack = this.dmgCalcul;

  dmgCalcul(random: number): number {
    if (random < this.crit / 100) {
      return this.dmg * (1 + this.critDmg / 100);
    } else if (random < this.crit / 100 + this.miss / 100) {
      return this.dmg * 0;
    } else {
      return this.dmg;
    }
  }
}

import { nanoid } from "nanoid";
import { shuffle } from "../game/helpers/Utils";

/* --- Interfaces ---*/

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
}

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
  dmgCalcul(arg0: number): number;
  attack: (random: number) => number;
}

export interface CardModel {
  id: string;
  name: string;
  type: "Attack" | "Defense" | "Utility";
  img: string;
  damage: number;
  protection: number;
  cost: number;
  rarity: 1 | 2 | 3;
}

/*--- Classes ---*/

class Hero implements HeroModel {
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
    public handSize: number
  ) {}
}

class Ennemy implements EnemyModel {
  constructor(
    public id: string,
    public name: string,
    public hp: number,
    public dmg: number,
    public defense: number,
    public img: string,
    public crit: number, //increase crit probability
    public critDmg: number, //increase crit damages
    public miss: number //increase missed attack probability
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

class Card implements CardModel {
  constructor(
    public id: string,
    public name: string,
    public type: "Attack" | "Defense" | "Utility",
    public img: string,
    public damage: number,
    public protection: number,
    public cost: number,
    public rarity: 1 | 2 | 3
  ) {}

  /*useCard (EnnemyHp: number, HeroMana: number, HeroDefense: number) {
        if (this.type === "Attack") {
            EnnemyHp -= this.damage
            HeroMana -= this.cost
        } else {
            HeroDefense += this.protection 
            HeroMana -= this.cost
        }
    }*/
}

/* --- Data Arrays --- */

export let heroArray: HeroModel[] = [
  new Hero(nanoid(8), "Dumpling", 60, 12, 0, "dumpling.png", 5, 10, 0, 4),
  new Hero(nanoid(8), "Wizard", 100, 10, 0, "wizard.png", 0, 20, 0, 5),
  new Hero(nanoid(8), "ElonMeh", 120, 10, 0, "elonmeh.png", 30, 5, 5, 6),
];

export let enemiesArray: EnemyModel[] = [
  new Ennemy(nanoid(8), "Dog", 25, 10, 0, "dog.png", 10, 10, 10),
  new Ennemy(nanoid(8), "Clown", 65, 5, 0, "clown.png", 20, 5, 10),
  new Ennemy(nanoid(8), "Orc", 100, 5, 0, "orc.png", 50, 5, 20),
];

shuffle(enemiesArray);

export let cardArray: CardModel[] = [
  new Card(nanoid(8), "MEHHHH", "Attack", "*", 10, 0, 5, 1),
  new Card(nanoid(8), "MEHHHH", "Attack", "*", 10, 0, 5, 1),
  new Card(nanoid(8), "MEHHHH", "Attack", "*", 10, 0, 5, 1),
  new Card(nanoid(8), "MEHHHH", "Attack", "*", 10, 0, 5, 1),
  new Card(nanoid(8), "MEHHHH", "Attack", "*", 10, 0, 5, 1),
  new Card(nanoid(8), "ProtectMeh", "Defense", "*", 0, 15, 6, 2),
  new Card(nanoid(8), "ProtectMeh", "Defense", "*", 0, 15, 6, 2),
  new Card(nanoid(8), "ProtectMeh", "Defense", "*", 0, 15, 6, 2),
  new Card(nanoid(8), "Kecece", "Attack", "*", 15, 5, 10, 2),
  new Card(nanoid(8), "Kecece", "Attack", "*", 15, 5, 10, 2),
  new Card(nanoid(8), "Kecece", "Attack", "*", 15, 5, 10, 2),
  new Card(nanoid(8), "UltiMEHHHHH", "Attack", "*", 30, 5, 10, 3),
  new Card(nanoid(8), "UltiMEHHHHH", "Attack", "*", 30, 5, 10, 3),
  new Card(nanoid(8), "UltiMEHHHHH", "Attack", "*", 30, 5, 10, 3),
  new Card(nanoid(8), "HEMMMM", "Defense", "*", 0, 10, 5, 1),
  new Card(nanoid(8), "HEMMMM", "Defense", "*", 0, 10, 5, 1),
  new Card(nanoid(8), "HEMMMM", "Defense", "*", 0, 10, 5, 1),
  new Card(nanoid(8), "HEMMMM", "Defense", "*", 0, 10, 5, 1),
  new Card(nanoid(8), "HEMMMM", "Defense", "*", 0, 10, 5, 1),
  new Card(nanoid(8), "ProtectMeh", "Defense", "*", 0, 10, 5, 1),
  new Card(nanoid(8), "ProtectMeh", "Defense", "*", 0, 10, 5, 1),
  new Card(nanoid(8), "ProtectMeh", "Defense", "*", 0, 10, 5, 1),
  new Card(nanoid(8), "ProtectMeh", "Defense", "*", 0, 10, 5, 1),
  new Card(nanoid(8), "ReloadMeh", "Utility", "*", 0, 0, -5, 2),
  new Card(nanoid(8), "ReloadMeh", "Utility", "*", 0, 0, -5, 2),
  new Card(nanoid(8), "ReloadMeh", "Utility", "*", 0, 0, -5, 2),
  new Card(nanoid(8), "ItsOnlyMeh", "Attack", "*", 15, 0, 10, 1),
  new Card(nanoid(8), "ItsOnlyMeh", "Attack", "*", 15, 0, 10, 1),
  new Card(nanoid(8), "ItsOnlyMeh", "Attack", "*", 15, 0, 10, 1),
  new Card(nanoid(8), "ItsOnlyMeh", "Attack", "*", 15, 0, 10, 1),
];
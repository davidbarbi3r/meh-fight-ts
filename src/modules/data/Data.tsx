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
  loot: CardModel[];
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

class Enemy implements EnemyModel {
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
  new Hero(nanoid(8), "Dumpling", 60, 12, 0, "https://lh3.googleusercontent.com/uOD5AHRwrKRb28S-0M27KjN3e0I39D6-SLEi8t3OyykPXFFdATuXUTXlQEWPy1kyG1UMcnbA4V2wss31JzVIWsIa1rhIu0bxrIg6pg4=s0", 5, 10, 0, 4),
  new Hero(nanoid(8), "Wizard", 100, 10, 0, "https://lh3.googleusercontent.com/DLTSPz6fjn3v_gMNw5LNokVtgGGlG5WG5LI4xI6braFDyLz3ODcoljHwzzyGwyg77CTgFI-J-6o-R5ZaRsiPjWqhOutyeRNqbyJ9GaU=s0", 0, 20, 0, 5),
  new Hero(nanoid(8), "ElonMeh", 120, 8, 0, "https://lh3.googleusercontent.com/FTV_NRYx9_dxUJE8qXjzYw1kqvU12FcysKw5dDbDE8OEsNh1_CxWT_pYDMe7fbsyGLO726gTOWw-ekhYS2OwWJcKu8JlyjQRBwrOpw=s0", 30, 5, 5, 6),
];

export let enemiesArray: EnemyModel[] = [
  new Enemy(nanoid(8), "Dog", 25, 15, 0, "https://lh3.googleusercontent.com/QKmM5tEsu4WATfR7dVoJdcOlxGiyIdC54ZcW9hOAnnDzoOem3SuhBoLttWwfWfkIktyKF8i4gkhUTxpRUJPQ4gHWp5plqh-n-FpPTA=s0", 10, 100, 10, 
  [new Card(nanoid(8), "Bite", "Attack", "*", 30, 0, 15, 2),
   new Card(nanoid(8), "Waaaf", "Defense", "*", 0, 2, 4, 1)]),
  new Enemy(nanoid(8), "Clown", 65, 5, 0, "https://lh3.googleusercontent.com/nl211myzjUu7Ly6tu-tFlRyRhBkdbXn18sPa9tVihZTJtN4KiCFNfJ7zcTh99EOi20kJSNyH0FXYsvlY6HiQyfu47vhqRfRPwtX1=s0", 20, 150, 10, 
  [new Card(nanoid(8), "Megamana", "Utility", "*", 0, 0, -10, 2),
  new Card(nanoid(8), "Wuuut", "Attack", "*", -10, 0, 0, 1)]),
  new Enemy(nanoid(8), "Orc", 100, 12, 0, "https://lh3.googleusercontent.com/ycSdMY2JiAyv5mVbRmvmo4E0za2TeFJIUNZSGQBSwe3IHSojV3xIEGqcGmmSPtaTkMMP3cn2Jvvo3kpO0vyLAfWAh2UnJSyMcS9LXQ=s0", 50, 50, 20, 
  [new Card(nanoid(8), "OrcBite", "Attack", "*", 40, 0, 20, 2)]),
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

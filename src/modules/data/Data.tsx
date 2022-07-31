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
  gold: number;
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
  dodge: number;
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
  anim: cardAnim;
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
    public handSize: number,
    public gold: number
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

enum cardAnim {
  shake = "shake",
  redhit = "redhit",
  blackout = "blackout",
  heal = "heal",
  shield = "shield",
  buff = "buff",
  invBuff = "invBuff",
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
    public rarity: 1 | 2 | 3,
    public anim: cardAnim
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
  new Hero(
    nanoid(8),
    "Dumpling",
    60,
    12,
    0,
    "https://lh3.googleusercontent.com/uOD5AHRwrKRb28S-0M27KjN3e0I39D6-SLEi8t3OyykPXFFdATuXUTXlQEWPy1kyG1UMcnbA4V2wss31JzVIWsIa1rhIu0bxrIg6pg4=w600",
    5,
    10,
    0,
    4,
    80
  ),
  new Hero(
    nanoid(8),
    "Wizard",
    100,
    10,
    0,
    "https://lh3.googleusercontent.com/DLTSPz6fjn3v_gMNw5LNokVtgGGlG5WG5LI4xI6braFDyLz3ODcoljHwzzyGwyg77CTgFI-J-6o-R5ZaRsiPjWqhOutyeRNqbyJ9GaU=w600",
    0,
    20,
    0,
    5,
    50
  ),
  // new Hero(nanoid(8), "ElonMeh", 120, 8, 0, "https://lh3.googleusercontent.com/FTV_NRYx9_dxUJE8qXjzYw1kqvU12FcysKw5dDbDE8OEsNh1_CxWT_pYDMe7fbsyGLO726gTOWw-ekhYS2OwWJcKu8JlyjQRBwrOpw=w600", 30, 5, 5, 6),
  new Hero(
    nanoid(8),
    "OG meh",
    120,
    11,
    0,
    "https://lh3.googleusercontent.com/mUHPCSkCjL1zKHklmbDSmK6xz_Z424A2yQuLEqRI9dvTnXrMN4yKMr-_uyzY5T5zH2brAPquw5vIU94J3XMQpejfelzwNSuM6AhK=w600",
    5,
    10,
    10,
    3,
    100
  ),
];

export let enemiesArray: EnemyModel[] = [
  new Enemy(
    nanoid(8),
    "Dog",
    25, //hp
    15, //dmg
    0, //def
    "https://lh3.googleusercontent.com/QKmM5tEsu4WATfR7dVoJdcOlxGiyIdC54ZcW9hOAnnDzoOem3SuhBoLttWwfWfkIktyKF8i4gkhUTxpRUJPQ4gHWp5plqh-n-FpPTA=s0",
    10, //crit chance
    100, //crit dmg
    10, //miss
    0, //dodge
    [
      new Card(nanoid(8), "Bite", "Attack", "*", 30, 0, 15, 2, cardAnim.redhit),
      new Card(nanoid(8), "Waaaf", "Defense", "*", 0, 2, 4, 1, cardAnim.shield),
    ]
  ),
  new Enemy(
    nanoid(8),
    "Clown",
    65, //hp
    5, //dmg
    0, //def
    "https://lh3.googleusercontent.com/nl211myzjUu7Ly6tu-tFlRyRhBkdbXn18sPa9tVihZTJtN4KiCFNfJ7zcTh99EOi20kJSNyH0FXYsvlY6HiQyfu47vhqRfRPwtX1=s0",
    20, //crit chance
    150, //crit dmg
    10, //miss
    20, //dodge
    [
      new Card(
        nanoid(8),
        "Megamana",
        "Utility",
        "*",
        0,
        0,
        -10,
        2,
        cardAnim.buff
      ),
      new Card(
        nanoid(8),
        "Wuuut",
        "Attack",
        "*",
        -10,
        0,
        0,
        1,
        cardAnim.invBuff
      ),
    ]
  ),
  new Enemy(
    nanoid(8),
    "Orc",
    100,
    12,
    0,
    "https://lh3.googleusercontent.com/ycSdMY2JiAyv5mVbRmvmo4E0za2TeFJIUNZSGQBSwe3IHSojV3xIEGqcGmmSPtaTkMMP3cn2Jvvo3kpO0vyLAfWAh2UnJSyMcS9LXQ=s0",
    50,
    50,
    20,
    5,
    [
      new Card(
        nanoid(8),
        "OrcBite",
        "Attack",
        "*",
        40,
        0,
        20,
        2,
        cardAnim.shake
      ),
    ]
  ),
];

shuffle(enemiesArray);

export let cardArray: CardModel[] = [
  new Card(nanoid(8), "MEHHHH", "Attack", "*", 10, 0, 5, 1, cardAnim.redhit),
  new Card(nanoid(8), "MEHHHH", "Attack", "*", 10, 0, 5, 1, cardAnim.redhit),
  new Card(nanoid(8), "MEHHHH", "Attack", "*", 10, 0, 5, 1, cardAnim.redhit),
  new Card(
    nanoid(8),
    "ProtectMeh",
    "Defense",
    "*",
    0,
    15,
    6,
    2,
    cardAnim.shield
  ),
  new Card(
    nanoid(8),
    "ProtectMeh",
    "Defense",
    "*",
    0,
    15,
    6,
    2,
    cardAnim.shield
  ),
  new Card(nanoid(8), "Kecece", "Attack", "*", 15, 5, 10, 2, cardAnim.redhit),
  new Card(nanoid(8), "Kecece", "Attack", "*", 15, 5, 10, 2, cardAnim.redhit),
  new Card(
    nanoid(8),
    "UltiMEHHHHH",
    "Attack",
    "*",
    30,
    5,
    10,
    3,
    cardAnim.blackout
  ),
  new Card(nanoid(8), "HEMMMM", "Defense", "*", 0, 10, 5, 1, cardAnim.shield),
  new Card(nanoid(8), "HEMMMM", "Defense", "*", 0, 10, 5, 1, cardAnim.shield),
  new Card(nanoid(8), "HEMMMM", "Defense", "*", 0, 10, 5, 1, cardAnim.shield),
  new Card(
    nanoid(8),
    "ProtectMeh",
    "Defense",
    "*",
    0,
    10,
    5,
    1,
    cardAnim.shield
  ),
  new Card(
    nanoid(8),
    "ProtectMeh",
    "Defense",
    "*",
    0,
    10,
    5,
    1,
    cardAnim.shield
  ),
  new Card(
    nanoid(8),
    "ProtectMeh",
    "Defense",
    "*",
    0,
    10,
    5,
    1,
    cardAnim.shield
  ),
  new Card(nanoid(8), "ReloadMeh", "Utility", "*", 0, 0, -5, 2, cardAnim.buff),
  new Card(nanoid(8), "ReloadMeh", "Utility", "*", 0, 0, -5, 2, cardAnim.buff),
  new Card(
    nanoid(8),
    "ItsOnlyMeh",
    "Attack",
    "*",
    15,
    0,
    10,
    1,
    cardAnim.shake
  ),
  new Card(
    nanoid(8),
    "ItsOnlyMeh",
    "Attack",
    "*",
    15,
    0,
    10,
    1,
    cardAnim.shake
  ),
];

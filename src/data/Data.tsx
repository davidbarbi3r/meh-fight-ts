import {nanoid} from 'nanoid'

/* --- Interfaces ---*/

export interface HeroModel {
     id: number,
     name: string,  
     hp: number,
     mana: number,
     img: string
}

export interface EnnemyModel {
    id: number,
    name: string,
    hp: number,
    dmg: number,
    img: string
}

export interface CardModel {
    id: string,
    name: string,
    type: "Attack" | "Defense" | "Utility",
    img: string,
    damage: number,
    protection: number, 
    cost: number,
    rarity: 1 | 2 | 3
}

/*--- Classes ---*/

class Hero {
    constructor (
        public id: number,
        public name: string,  
        public hp: number,
        public mana: number,
        public defense : number,
        public img: string ){}
}

class Ennemy {
    constructor (
        public id: number,
        public name: string,
        public hp: number,
        public dmg: number,
        public img: string){}
}

class Card {
    constructor (
        public id: string,
        public name: string,
        public type: "Attack" | "Defense" | "Utility",
        public img: string,
        public damage: number,
        public protection: number, 
        public cost: number,
        public rarity: 1 | 2 | 3) {}

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
    new Hero(63, "Dumpling", 100, 10, 0, "dumpling.png"),
    new Hero(87, "Wizard", 100, 10, 0, "wizard.png"),
    new Hero(65, "ElonMeh", 100, 10, 0, "elonmeh.png")
]

export let ennemiesArray: EnnemyModel[] = [
    new Ennemy(81, "Dog", 25, 10, "dog.png"),
    new Ennemy(74, "Clown", 65, 5, "clown.png"),
    new Ennemy(71, "Orc", 100, 5, "orc.png")
]

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
]



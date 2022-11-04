import { CardModel } from "./Card";
import { gameStatus } from "./Game";
import { HeroModel } from "./Hero";

type actionType = "attack" | "defend" | "utility" | "curse";

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
  actionType?: actionType;
  dmgCalcul(arg0: number): number;
  attack: (random: number) => number;
  loot: CardModel[];
  isDead: boolean;
  useAttack: (
    currentHero: HeroModel,
    heroInitial: HeroModel,
    setHero: (value: React.SetStateAction<HeroModel>) => void,
    setGame: (value: React.SetStateAction<gameStatus>) => void
  ) => void;
  useBuff: (
    setCurrentEnemy: (value: React.SetStateAction<EnemyModel>) => void
  ) => void;
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
    public loot: CardModel[],
    private heal: number = 0.1 * hp,
    public actionType: actionType = "attack",
    public isDead: boolean = false
  ) {}
  public attack = this.dmgCalcul;

  public useAttack = (
    currentHero: HeroModel,
    heroInitial: HeroModel,
    setHero: (value: React.SetStateAction<HeroModel>) => void,
    setGame: (value: React.SetStateAction<gameStatus>) => void
  ) => {
    const rand = Math.random();
    const attackDmg = this.dmgCalcul(rand);
    if (currentHero.defense + currentHero.hp <= attackDmg) {
      setHero((prev) => {
        return { ...prev, isDead: true, hp: 0 };
      });
      setGame(gameStatus.endGame);
    } else {
      setHero((prev) => {
        return currentHero.defense
          ? attackDmg <= currentHero.defense
            ? { ...prev, mana: heroInitial.mana, defense: heroInitial.defense }
            : {
                ...prev,
                hp: prev.hp + prev.defense - attackDmg,
                mana: heroInitial.mana,
                defense: heroInitial.defense,
              }
          : {
              ...prev,
              hp: prev.hp - attackDmg,
              mana: heroInitial.mana,
            };
      });
    }
  };

  public useBuff = (
    setCurrentEnemy: (value: React.SetStateAction<EnemyModel>) => void
  ) => {
    const rand = Math.random();
    if (rand < 0.5) {
      setCurrentEnemy((prev) => ({ ...prev, hp: prev.hp + this.heal }));
    } else {
      setCurrentEnemy((prev) => ({ ...prev, defense: prev.defense + this.heal }));
    }
  };

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

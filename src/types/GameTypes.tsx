export enum gameStatus {
    intro = "Intro",
    Efighting = "EFighting",
    Hfighting = "HFighting",
    enemyDead = "ObjectSelection",
    endGame = "EndGame",
  }

export interface IMessage {
  character?: string,
  alert?: string,
  dmg?: number,
  protect?: number,
  crit?: boolean,
  anim?: string,
  dodged?: boolean
}
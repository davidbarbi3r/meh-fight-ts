import { gameStatus } from "../../game/types/Game"
import { HeroModel } from "../../heroes/types/Hero"

export interface IIntro {
    startGame: () => void,
    heroArray: HeroModel[],
    selectHero: (id: string) => void,
    gameState: gameStatus.intro
}
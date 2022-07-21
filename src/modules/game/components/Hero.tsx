import { HeroModel } from "../../data/Data";
import "../../style/Char.css";
import { gameStatus } from "../types/GameTypes";

interface HeroProps {
  hero: HeroModel;
  gameState: gameStatus;
}


function Hero({hero, gameState}: HeroProps) {
  const classHero = gameState === gameStatus.Hfighting? "char-img fighting" : "char-img"
  const classStatsHero = hero.defense > 0 && "def" 

  return (
  <div className="char hero">
      {/* <h2>{hero.name}</h2> */}
      <div className="char-container">
        <div className="char-meh">
          <img
            src={hero.img}
            alt={hero.name}
            className={`${classHero} + ${classStatsHero}`}
          ></img>
          <div className={`char-stats`}>
            <div>{hero.hp} hp</div>
            <div>{hero.mana} mana</div>
            <div>{hero.defense} def</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

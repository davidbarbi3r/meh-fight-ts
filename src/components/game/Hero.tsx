import { HeroModel } from "../../interfaces/Hero";
import "../../style/Char.css";
import { gameStatus } from "../../interfaces/Game";

interface HeroProps {
  hero: HeroModel;
  initialHero: HeroModel;
  gameState: gameStatus;
}

function Hero({ hero, gameState, initialHero }: HeroProps) {
  const classHero =
    gameState === gameStatus.Hfighting ? "char-img fighting" : "char-img";
  const classStatsHero = hero.defense > 0 && "def";

  const heathPercent = (hero.hp / initialHero.hp) * 100;
  const manaPercent = hero.mana > initialHero.mana ? 100 : (hero.mana / initialHero.mana) * 100;
  const defPercent = hero.defense
    ? (hero.defense / 30) * 100
    : hero.defense > 30
    ? 100
    : 0;

  const hpBar = {
    color: "white",
    width: `${heathPercent}%`,
    backgroundColor: "red",
    animation: "fadeInAnimation 2s",
  };

  const manaBar = {
    color: "white",
    width: `${manaPercent}%`,
    backgroundColor: "blue",
    animation: "fadeInAnimation 2s",
  };

  const defenseBar = {
    color: "white",
    width: `${defPercent}%`,
    backgroundColor: "green",
    animation: "fadeInAnimation 2s",
  };

  return (
    <div className="char hero">
      <div className="char-container">
        <div className="char-meh">
          <img
            src={hero.img}
            alt={hero.name}
            className={`${classHero} + ${classStatsHero}`}
          ></img>
          <div className={`char-stats`}>
            <div className="bar" style={hpBar}>
              <div>{hero.hp}</div>
              <div>❤</div>
            </div>
            <div className="bar" style={manaBar}>
              <div>{hero.mana}</div>
              <div>💧</div>
            </div>
            <div className="bar" style={defenseBar}>
              <div>{hero.defense}</div>
              <div>🔰</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

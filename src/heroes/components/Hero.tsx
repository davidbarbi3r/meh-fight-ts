import { HeroModel } from "../types/Hero";
import "../style/Char.css";
import { gameStatus } from "../../game/types/Game";
import { useEffect, useRef, useState } from "react";

interface HeroProps {
  hero: HeroModel;
  initialHero: HeroModel;
  gameState: gameStatus;
}

function Hero({ hero, gameState, initialHero }: HeroProps) {
  const [anim, setAnim] = useState(false);
  const classHero =
    gameState === gameStatus.Hfighting
      ? "char-img fighting"
      : anim
      ? `vibrate`
      : "char-img";
  const classStatsHero = hero.defense > 0 && "def";
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      setAnim(true);
      setTimeout(() => {
        setAnim(false);
      }, 500);
    } else didMount.current = true;
  }, [hero.hp]);

  const animateHero = anim && initialHero.hp > hero.hp ? "vibrate" : "";
  const heathPercent = (hero.hp / initialHero.hp) * 100;
  const manaPercent =
    hero.mana > initialHero.mana ? 100 : (hero.mana / initialHero.mana) * 100;
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
        <div className={`char-meh ${animateHero}`}>
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

import { EnemyModel } from "../../interfaces/Enemy";
import { CardModel } from "../../interfaces/Card";
import "../../style/Char.css";
import { gameStatus } from "../../interfaces/Game";
import { useEffect, useState } from "react";

interface EnemyProps {
  enemy: EnemyModel;
  initialEnemy: EnemyModel;
  gameState: gameStatus;
  lastCard: CardModel;
}

function Enemy({ enemy, gameState, lastCard, initialEnemy }: EnemyProps) {
  const [anim, setAnim] = useState(false);
  const classStyle =
    gameState === gameStatus.Efighting ? `char-img fighting` : "char-img";

  const enemyDead = enemy.hp === 0 ? "dead" : "";

  const heathPercent = (enemy.hp / initialEnemy.hp) * 100;
  const defPercent = enemy.defense
    ? (enemy.defense / 30) * 100
    : enemy.defense > 30
    ? 100
    : 0;

  const hpBar = {
    color: "white",
    width: `${heathPercent}%`,
    animation: "fadeInAnimation 2s linear",
    backgroundColor: "red",
  };

  const defenseBar = {
    color: "white",
    width: `${defPercent}%`,
    backgroundColor: "green",
    animation: "fadeInAnimation 2s",
  };

  useEffect(() => {
    if (enemy.hp > 0) {
      setAnim(true);
      console.log("Loosing life...");
      setTimeout(() => {
        setAnim(false);
      }, 500);
    }
  }, [enemy.hp]);

  return (
    <div className="char enemy">
      <div className="char-container">
        <div
          className={`${
            anim && enemy.hp < initialEnemy.hp
              ? `${lastCard.anim}`
              : anim && enemy.hp < initialEnemy.hp * 0.25
              ? "lowLife"
              : ""
          }`}
        >
          <img
            src={`${enemy.img}`}
            alt={enemy.name}
            className={`${classStyle} ${enemyDead}`}
          ></img>
          <div className={`char-stats`}>
            <div className="bar" style={hpBar}>
              <div>{enemy.hp}</div>
              <div>❤</div>
            </div>
            <div className="bar" style={defenseBar}>
              <div>{enemy.defense}</div>
              <div>🔰</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enemy;

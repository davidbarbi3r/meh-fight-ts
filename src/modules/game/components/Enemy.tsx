import { CardModel, EnemyModel } from "../../data/Data";
import "../../style/Char.css";
import { gameStatus } from "../types/GameTypes";

interface EnemyProps {
  enemy: EnemyModel;
  initialEnemy: EnemyModel;
  gameState: gameStatus;
  lastCard: CardModel;
}

function Enemy({ enemy, gameState, lastCard, initialEnemy }: EnemyProps) {
  const classStyle =
    gameState === gameStatus.Efighting ? `char-img fighting ${lastCard.anim}` : "char-img";

  const enemyDead = enemy.hp === 0 ? "dead" : ""

  const heathPercent = (enemy.hp / initialEnemy.hp)*100

  const hpBar = {
    color: "white",
    width: `${heathPercent}%`,
    animation: "fadeInAnimation 2s",
    backgroundColor: "red"
  };


  return (
    <div className="char enemy">
      <p className="char-msg">{lastCard.damage ? "- " + lastCard.damage + " hp": ""}</p>
      <div className="char-container">
        <div className="char-meh">
          <img
            src={`${enemy.img}`}
            alt={enemy.name}
            className={`${classStyle} ${enemyDead}`}
          ></img>
          <div className={`char-stats`}>
            <div className="bar" style={hpBar}>
            <div>{enemy.hp}</div>
              <div>❤</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enemy;

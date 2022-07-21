import { CardModel, EnemyModel } from "../../data/Data";
import "../../style/Char.css";
import { gameStatus } from "../types/GameTypes";

interface EnemyProps {
  enemy: EnemyModel;
  gameState: gameStatus;
  lastCard: CardModel;
}

function Enemy({ enemy, gameState, lastCard }: EnemyProps) {
  const classStyle =
    gameState === gameStatus.Efighting ? `char-img fighting ${lastCard.effect}` : "char-img";

  const enemyDead = enemy.hp === 0 ? "dead" : ""


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
          <div className="char-stats">
            <div>{enemy.hp} hp</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enemy;

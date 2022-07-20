import { EnemyModel } from "../../data/Data";
import "../../style/Char.css";
import { gameStatus } from "../types/GameTypes";

interface EnemyProps {
  enemies: EnemyModel;
  gameState: gameStatus;
}

function Enemy({enemies, gameState}: EnemyProps) {

  const classStyle = gameState === gameStatus.Efighting ? "char-img fighting" : "char-img" 

  return (
    <div className="char">
      {/* <h2>{enemies.name}</h2> */}
      <div className="char-container">
        <div className="char-meh">
          <img
            src={`${enemies.img}`}
            alt={enemies.name}
            className={classStyle}
          ></img>
          <div className="char-stats">
            <div>{enemies.hp} hp</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enemy;

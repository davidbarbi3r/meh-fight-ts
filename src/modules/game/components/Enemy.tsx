import { EnemyModel } from "../../data/Data";
import "../../style/Char.css"

interface EnemyProps {
  enemies: EnemyModel;
}

function Enemy(props: EnemyProps) {
  return (
    <div className="char">
      {/* <h2>{props.enemies.name}</h2> */}
      <div className="char-container">
        <div className="char-meh">
          <img
            src={`${props.enemies.img}`}
            alt={props.enemies.name}
            className="char-img"
          ></img>
          <div className="char-stats">
            <div>{props.enemies.hp} hp</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enemy;

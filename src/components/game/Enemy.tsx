import { EnemyModel } from "../../interfaces/Enemy";
import { CardModel } from "../../interfaces/Card";
import "../../style/Char.css";
import { gameStatus } from "../../interfaces/Game";

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

  const animHp = ():string => {
    if (lastCard.damage){
      let anim = "char-msg"
      setTimeout(() => {anim = "char-msg pop"}, 2000)
      return anim
    } else {return "char-msg"}
  }

  const enemyClass = animHp


  return (
    <div className="char enemy">
      <div className="char-container">
        <div className="char-meh">
          <p className={enemyClass()}>{lastCard.damage ? "- " + lastCard.damage + " hp": "15"}</p>
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

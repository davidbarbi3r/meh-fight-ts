import { EnemyModel } from '../data/Data';

interface EnemyProps {
    enemies: EnemyModel
}

function Enemy(props: EnemyProps) {
    return (
        <div className='char'>
            <h2>{props.enemies.name}</h2>
            <div className="char-container">
                <div className="char-meh">
                    <img src={`./images/enemies/${props.enemies.img}`} 
                         alt={props.enemies.name} 
                         className='char-img'></img>
                    <div className="char-stats">
                        <div>
                            {props.enemies.hp} hp
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Enemy;
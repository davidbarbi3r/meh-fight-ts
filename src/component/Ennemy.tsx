import React from 'react';
import { EnnemyModel } from '../data/Data';

interface EnnemyProps {
    ennemies: EnnemyModel
}

function Ennemy(props: EnnemyProps) {
    console.log(props)
    return (
        <div className='char'>
            <h2>{props.ennemies.name}</h2>
            <div className="char-container">
                <div className="char-meh">
                    <img src={`./images/ennemies/${props.ennemies.img}`} 
                         alt={props.ennemies.name} 
                         className='char-img'></img>
                    <div className="char-stats">
                        <div>
                            {props.ennemies.hp} hp
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ennemy;
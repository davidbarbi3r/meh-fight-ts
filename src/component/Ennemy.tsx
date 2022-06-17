import React from 'react';
import { EnnemyModel } from '../data/Data';

interface EnnemiesProps {
    ennemies: EnnemyModel[]
}

function Ennemy(props: EnnemiesProps) {
    console.log(props)
    return (
        <div className='char'>
            <h2>{props.ennemies[0].name}</h2>
            <div className="char-container">
                <div className="char-meh">
                    <img src={`./images/ennemies/${props.ennemies[0].img}`} 
                         alt={props.ennemies[0].name} 
                         className='char-img'></img>
                    <div className="char-stats">
                        <div>
                            {props.ennemies[0].hp} hp
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ennemy;
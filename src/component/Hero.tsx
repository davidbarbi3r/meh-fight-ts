import React from 'react';
import { HeroModel } from '../data/Data';
import '../style/Char.css';

interface HeroProps {
    hero: HeroModel[]
}

function Hero(props: HeroProps) {
    return (
        <div className='char'>
            <h2>{props.hero[0].name}</h2>
            <div className="char-container">
                <div className="char-meh">
                    <img src={`./images/heros/${props.hero[0].img}`} 
                         alt={`${props.hero[0].name}`}
                         className="char-img"></img>
                    <div className="char-stats">
                        <div>{props.hero[0].hp} hp</div>
                        <div>{props.hero[0].mana} mana</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
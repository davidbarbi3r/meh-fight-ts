import { HeroModel } from '../data/Data';
import '../style/Char.css';

interface HeroProps {
    hero: HeroModel
}

function Hero(props: HeroProps) {
    return (
        <div className='char'>
            <h2>{props.hero.name}</h2>
            <div className="char-container">
                <div className="char-meh">
                    <img src={`./images/heros/${props.hero.img}`} 
                         alt={`${props.hero.name}`}
                         className="char-img"></img>
                    <div className="char-stats">
                        <div>{props.hero.hp} hp</div>
                        <div>{props.hero.mana} mana</div>
                        <div>{props.hero.defense} def</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
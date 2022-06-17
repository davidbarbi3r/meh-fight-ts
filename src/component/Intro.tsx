import React from 'react';


function Intro(props:any) {

    const heroImgHtml = props.heroArray.map((hero: { id: number; img: string; name: string;}) => 
            <button className='game-starter-char' 
                    onClick={() => props.selectHero(hero.id)}>
                <img src={`./images/heros/${hero.img}`} alt={`${hero.name}`}></img>
            </button>
        )
    return (
        <div>
            <section className='game-starter'>
                <section className='game-starter-charSelection'>
                    {heroImgHtml}
                </section>
                <button className='std-btn' onClick={props.startGame}>
                    Start Game
                </button>
            </section>
        </div>
    );
}

export default Intro;
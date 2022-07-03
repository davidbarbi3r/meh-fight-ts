import React from 'react';
import { CardModel } from '../data/Data';
import '../style/Cards.css'

interface CardsProps {
    cards: CardModel[],
    useCard: (card: CardModel) => void
}

function Cards(props: CardsProps) {
    console.log(props)
    return (
        <div className='card-rack'>
            {props.cards.map(card => 
                <div className='card' onClick={() => props.useCard(card)} key={card.id}>
                    <h3>{card.name}</h3>
                    <ul className='cards-specs'>
                        <li>{card.type === "Attack" ? "Dmg: " + card.damage : 
                                                      "Def: " + card.protection}
                        </li>
                        <li>{'Cost: ' + card.cost}</li>
                        <li>{card.rarity}</li>
                    </ul>
                </div>)}
        </div>
    );
}

export default Cards;


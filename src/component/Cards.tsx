import React from 'react';
import { CardModel } from '../data/Data';
import '../style/Cards.css'

interface CardsProps {
    cards: CardModel[],
    useCard: (card: CardModel) => void
}

function Cards(props: CardsProps) {

    return (
        <div className='card-rack'>
            {props.cards.map(card => 
                <div style={{
                        backgroundColor: card.type === "Attack" ? "#d69797" : card.type === "Defense" ? '#97c4d6' : "#97d6b7",
                        border: card.rarity === 2 ? "3px solid blue" : card.rarity === 3 ? "3px solid red" : "1px solid black",
                    }}
                    className='card' onClick={() => props.useCard(card)} key={card.id}>
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


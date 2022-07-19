import { CardModel } from "../../data/Data";
import "../../style/Cards.css";

export interface CardsProps {
  cards: CardModel[];
  action: (card: CardModel) => void;
}

export function Cards({cards, action}: CardsProps) {
  return (
    <div className="card-rack">
      {cards.map((card) => (
        <div
          style={{
            backgroundColor:
              card.type === "Attack"
                ? "#d69797"
                : card.type === "Defense"
                ? "#97c4d6"
                : "#97d6b7",
            border:
              card.rarity === 2
                ? "3px solid blue"
                : card.rarity === 3
                ? "3px solid red"
                : "1px solid black",
          }}
          className="card"
          onClick={() => action(card)}
          key={card.id}
        >
          <h3 className="card-title">{card.name}</h3>
          <ul className="cards-specs">
            <li>
              {card.type === "Attack"
                ? "Dmg: " + card.damage
                : "Def: " + card.protection}
            </li>
            <li>{"Cost: " + card.cost}</li>
          </ul>
          <p className="rarity">{card.rarity === 1 ? "⚫" : card.rarity === 2 ? "⬛" : "🔶"}</p>
        </div>
      ))}
    </div>
  );
}

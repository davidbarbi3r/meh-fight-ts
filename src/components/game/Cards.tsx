import { HeroModel } from "../../interfaces/Hero";
import { CardModel } from "../../interfaces/Card";
import "../../style/Cards.css";
import { gameStatus } from "../../interfaces/Game";

export interface CardsProps {
  cards: CardModel[];
  action: (card: CardModel) => void;
  gameState: gameStatus;
  hero: HeroModel;
}

export function Cards({ cards, action, gameState, hero }: CardsProps) {
  const cardRackClass =
    gameState === gameStatus.Efighting ? "card-rack disabled" : "card-rack";

  return (
    <div className={cardRackClass}>
      {cards.map((card) => (
        <div
          style={{
            background:
              card.rarity === 3
                 ? "#f7a766"
                 : "",
            border:
              card.type === "Attack"
                ? "4px inset red"
                : card.type === "Defense"
                ? "4px outset blue"
                : "4px inset green",
            cursor: gameState === gameStatus.Hfighting ? card.cost > hero.mana ? "not-allowed" : "pointer" : "pointer",
            opacity: gameState === gameStatus.Hfighting ? card.cost > hero.mana ? 0.7 : 1 : 1,
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
          <p className="rarity">
            {card.rarity === 1 ? "⚫" : card.rarity === 2 ? "⬛" : "🔶"}
          </p>
        </div>
      ))}
    </div>
  );
}

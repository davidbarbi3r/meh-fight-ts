import { styled } from "@stitches/react";
import { HeroModel } from "../../heroes/types/Hero";
import { CardModel } from "../types/Card";
import "../style/Cards.css";
import "../../app/style/Responsive.css";
import { gameStatus } from "../../game/types/Game";

export interface CardsProps {
  cards: CardModel[];
  action: (card: CardModel) => void;
  gameState: gameStatus;
  hero: HeroModel;
}

const StyledCard = styled("button", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  position: "relative",
  borderRadius: "5%",
  border: "2px inset black",
  margin: "-5em -1em",
  backgroundColor: "#f1d8b6",
  transition: "all 300ms ease",
  padding: "1.5em",
  minWidth: "100px",
  width: "100%",
  fontFamily: "acme",
  "media(max-width: 675px)": {
    width: "40px",
  },
  "&:hover, &:focus": {
    transform: "translateY(-2em)",
    marginRight: "1em",
    cursor: "pointer",
  },
});

export function Cards({ cards, action, gameState, hero }: CardsProps) {
  const cardRackClass =
    gameState === gameStatus.Efighting ? "card-rack disabled" : "card-rack";

  return (
    <div className={cardRackClass}>
      {cards.map((card) => (
        <StyledCard
          style={{
            background: card.rarity === 3 ? "#f7a766" : "",
            border:
              card.type === "Attack"
                ? "4px inset red"
                : card.type === "Defense"
                ? "4px outset blue"
                : "4px inset green",
            cursor:
              gameState === gameStatus.Hfighting
                ? card.cost > hero.mana
                  ? "not-allowed"
                  : "pointer"
                : "pointer",
            opacity:
              gameState === gameStatus.Hfighting
                ? card.cost > hero.mana
                  ? 0.7
                  : 1
                : 1,
          }}
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
        </StyledCard>
      ))}
    </div>
  );
}

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Cards } from "./Cards";
import Hero from "./Hero";
import Enemy from "./Enemy";
import { HeroModel } from "../../interfaces/Hero";
import { EnemyModel } from "../../interfaces/Enemy";
import { CardModel } from "../../interfaces/Card";
import { gameStatus } from "../../interfaces/Game";
import "../../style/Responsive.css";

interface BattleGroundProps {
  heroSelected: HeroModel;
  initalHero: HeroModel;
  currentEnemy: EnemyModel;
  initialEnemy: EnemyModel;
  hand: CardModel[];
  useCard: (card: CardModel) => void;
  endTurn: () => void;
  discardPile: number;
  deck: number;
  gameState: gameStatus;
  lastCard: CardModel;
}

function BattleGround({
  heroSelected,
  currentEnemy,
  hand,
  useCard,
  endTurn,
  discardPile,
  deck,
  gameState,
  lastCard,
  initalHero,
  initialEnemy,
}: BattleGroundProps) {
  const isDisabled = gameState === gameStatus.Efighting;

  return (
    <div className="App">
      <Header/>
      <section className="App-game-container">
        <div className="App-game-players-container">
          <Hero
            hero={heroSelected}
            gameState={gameState}
            initialHero={initalHero}
          />
          <Enemy
            enemy={currentEnemy}
            gameState={gameState}
            lastCard={lastCard}
            initialEnemy={initialEnemy}
          />
        </div>
        <div className="App-game-card-container">
          <div className="App-game-hand-container">
            <Cards
              cards={hand}
              action={useCard}
              gameState={gameState}
              hero={heroSelected}
            />
            {/* game chat here  */}
            <button
              className="std-btn btn-end"
              onClick={endTurn}
              disabled={isDisabled}
            >
              End turn
            </button>
          </div>
        </div>
      </section>
      <p>Discard pile size: {discardPile}</p>
      <p>Deck size: {deck}</p>
      <Footer />
    </div>
  );
}

export default BattleGround;

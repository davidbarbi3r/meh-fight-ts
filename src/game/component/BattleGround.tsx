import Header from "../../app/components/Header";
import Footer from "../../app/components/Footer";
import { Cards } from "../../cards/components/Cards";
import Hero from "../../heroes/components/Hero";
import Enemy from "../../enemies/components/Enemy";
import { HeroModel } from "../../heroes/types/Hero";
import { EnemyModel } from "../../enemies/types/Enemy";
import { CardModel } from "../../cards/types/Card";
import { gameStatus } from "../types/Game";
import "../../app/style/Responsive.css";

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
      <Header />
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
      <Footer />
    </div>
  );
}

export default BattleGround;

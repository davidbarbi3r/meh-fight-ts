import Header from "../../layout/components/Header";
import Footer from "../../layout/components/Footer";
import { Cards } from "./Cards";
import Hero from "./Hero";
import Enemy from "./Enemy";
import { CardModel, EnemyModel, HeroModel } from "../../data/Data";
import { gameStatus } from "../types/GameTypes";
import '../../style/Responsive.css'

interface BattleGroundProps {
  resetGame: () => void;
  heroSelected: HeroModel;
  currentEnemy: EnemyModel;
  hand: CardModel[];
  useCard: (card: CardModel) => void;
  endTurn: () => void;
  discardPile: number;
  deck: number;
  gameState: gameStatus;
}

function BattleGround({
  resetGame,
  heroSelected,
  currentEnemy,
  hand,
  useCard,
  endTurn,
  discardPile,
  deck,
  gameState
}: BattleGroundProps) {

  const isDisabled = gameState === gameStatus.Efighting

  return (
    <div className="App">
      <Header resetGame={resetGame} />
      <section className="App-game-container">
        <div className="App-game-players-container">
          <Hero hero={heroSelected} gameState={gameState} />
          <Enemy enemies={currentEnemy} gameState={gameState}/>
        </div>
        <div className="App-game-card-container">
          <div className="App-game-hand-container">
            <Cards cards={hand} action={useCard}   gameState={gameState}/>
            <button className="std-btn btn-end" onClick={endTurn} disabled={isDisabled}>
              End turn
            </button>
          </div>
        </div>
      </section>
      {/* <p>Discard pile size: {discardPile}</p>
      <p>Deck size: {deck}</p> */}
      <Footer />
    </div>
  );
}

export default BattleGround;

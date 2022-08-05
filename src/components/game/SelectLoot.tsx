import {Cards, CardsProps} from "./Cards";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../../style/LootSelection.css"


function SelectLoot({cards, action, gameState, hero}:CardsProps) {

     return (
        <div className="App">
            <Header/>
            <h1 className="Loot-title">Select a loot</h1>
            <div className="Loot-container">
                <Cards
                cards={cards}
                action={action}
                gameState={gameState}
                hero={hero}/>
            </div>
            <Footer/>
        </div>
    );
}

export default SelectLoot;
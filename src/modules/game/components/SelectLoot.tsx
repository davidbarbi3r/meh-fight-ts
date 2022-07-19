import {Cards, CardsProps} from "./Cards";
import Header from "../../layout/components/Header";
import Footer from "../../layout/components/Footer";
import "../../style/LootSelection.css"


function SelectLoot({cards, action}:CardsProps) {

     return (
        <div className="App">
            <Header/>
            <h1 className="Loot-title">Select a loot</h1>
            <div className="Loot-container">
                <Cards
                cards={cards}
                action={action}/>
            </div>
            <Footer/>
        </div>
    );
}

export default SelectLoot;
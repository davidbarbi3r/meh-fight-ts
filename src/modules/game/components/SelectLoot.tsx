import { findByLabelText } from "@testing-library/react";
import { CardModel } from "../../data/Data";
import {Cards, CardsProps} from "./Cards";


function SelectLoot({cards, action}:CardsProps) {

    const style = {
        paddingTop: "10rem",
        margin: "0 auto",
        display: "column"
    }

    return (
        <div className="Loot-container" style={style}>
            <Cards
            cards={cards}
            action={action}/>
            <button className="std-btn">Continue fighting</button>
        </div>
    );
}

export default SelectLoot;
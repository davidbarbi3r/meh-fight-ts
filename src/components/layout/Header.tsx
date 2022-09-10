import { useNavigate } from "react-router-dom";
import "../../style/Header.css"


function Header() {
    const navigate = useNavigate()

    const resetGame = (): void => {
        navigate("/meh-fight-ts")
      };

    return (
        <header>
            <h1>Meh Fight</h1>
            <div className="Header-rack-btn">
                <button className="std-btn" onClick={resetGame}>Reset</button>
                <button className="std-btn" disabled>Save</button>
            </div>
        </header>
    );
}

export default Header;
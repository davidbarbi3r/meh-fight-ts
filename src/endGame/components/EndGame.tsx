import Header from "../../app/components/Header";
import Footer from "../../app/components/Footer";
import "../style/EndGame.css";

interface EndGameProps {
  heroHp: number;
}

function EndGame({ heroHp }: EndGameProps) {
  return (
    <div className="App">
      <Header />
      <h1 className="End-message">
        {heroHp === 0 ? "☠ Loooser ☠" : "Congratulation you Wins 🎊"}
      </h1>
      <Footer />
    </div>
  );
}

export default EndGame;

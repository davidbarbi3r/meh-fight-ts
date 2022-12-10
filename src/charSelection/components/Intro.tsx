import Header from "../../app/components/Header";
import Footer from "../../app/components/Footer";
import "../style/Intro.css";
import { IIntro } from "../types/Intro";
import { Carousel } from "./Carousel";

function Intro({heroArray, selectHero, startGame}: IIntro) {
  const heroImgHtml = heroArray.map(
    (hero) => (
      <button
        className="game-starter-char"
        onClick={() => selectHero(hero.id)}
        key={hero.id}
      >
        <img src={`${hero.img}`} alt={`${hero.name}`}></img>
        <div className="Stats">
          <p>Hp: {hero.hp} ❤</p>
          <p>Mana: {hero.mana} 💧</p>
          <p>Hand Size: {hero.handSize} 🃏</p>
        </div>
      </button>
    )
  );
  return (
    <div className="App">
      <Header />
      <section className="game-starter">
        <section className="game-starter-charSelection">
          {/* {heroImgHtml} */}
          <Carousel items={heroArray} selectHero={selectHero}/>
        </section>
        <button className="std-btn" onClick={startGame}>
          Start Game
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default Intro;

import Header from "../../layout/components/Header";
import Footer from "../../layout/components/Footer";
import "../../style/Intro.css"

function Intro(props: any) {
  const heroImgHtml = props.heroArray.map(
    (hero: {
      id: number;
      img: string;
      name: string;
      hp: number;
      mana: number;
      handSize: number;
    }) => (
      <button
        className="game-starter-char"
        onClick={() => props.selectHero(hero.id)}
        key={hero.id}
      >
        <img src={`./images/heros/${hero.img}`} alt={`${hero.name}`}></img>
        <div className="Stats">
          <p>Hp: {hero.hp}</p>
          <p>Mana: {hero.mana}</p>
          <p>Hand Size: {hero.handSize}</p>
        </div>
      </button>
    )
  );
  return (
    <div>
      <Header/>
      <section className="game-starter">
        <section className="game-starter-charSelection">{heroImgHtml}</section>
        <button className="std-btn" onClick={props.startGame}>
          Start Game
        </button>
      </section>
      <Footer/>
    </div>
  );
}

export default Intro;

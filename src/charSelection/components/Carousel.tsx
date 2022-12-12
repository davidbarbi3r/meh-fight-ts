import { useEffect, useRef, useState } from "react";
import { HeroModel } from "../../heroes/types/Hero";
import { Arrow } from "./Arrow";
import "../style/Carousel.css"
import "../style/Intro.css"

interface ICarousel {
    items: HeroModel[],
    selectHero: (id: string) => void,
}

export const Carousel = ({ items, selectHero }: ICarousel) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentItemRef = useRef<HTMLButtonElement>(null);
    const [showHeroDetails, setShowHeroDetails] = useState(false)
  
    const changeItem = (index: number) => {
      setCurrentIndex(index);
    };
   
    useEffect(() => {
      // Check if the current item element exists and scroll it into view
      if (currentItemRef.current) {
        currentItemRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, []);
  
    return (
      <div className="carousel-container">
        {items.map((item, index) => (
          <button
            key={item.id}
            ref={index === currentIndex ? currentItemRef : null}
            className={`carousel-item ${
              index < currentIndex ? 'prev' : index > currentIndex+1 ? 'hidden' : index > currentIndex ? "next" : ''
            } game-starter-char`}
            style={
              index === currentIndex
                ? { background: 'lightgrey' }
                : { background: 'white' }
            }
            onClick={() => selectHero(item.id)}
          >
            <img src={`${item.img}`} alt={`${item.name}`}></img>
            <div className="stats">
            <p>Hp: {item.hp} ❤</p>
            <p>Mana: {item.mana} 💧</p>
            <p>ProbCrit: {item.crit}</p>
            <p>CritDmg: {item.critDmg}</p>
            <p>Gold: {item.gold}</p>
            <p>ProbMiss: {item.miss}</p>
            <p>NbCards: {item.handSize} 🃏</p>
            </div>
          </button>
        ))}
        <Arrow
          direction="prev"
          onClick={() => changeItem(currentIndex - 1)}
          className={currentIndex === 0 ? 'hidden' : ''}
        />
        <Arrow
          direction="next"
          onClick={() => changeItem(currentIndex + 1)}
          className={currentIndex === items.length - 1 ? 'hidden' : ''}
        />
      </div>
    );
  };
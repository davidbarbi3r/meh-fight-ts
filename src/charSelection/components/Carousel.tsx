import { useEffect, useRef, useState } from "react";
import { HeroModel } from "../../heroes/types/Hero";
import { Arrow } from "./Arrow";
import "../style/Carousel.css"

interface ICarousel {
    items: HeroModel[],
    selectHero: (id: string) => void,
}

export const Carousel = ({ items, selectHero }: ICarousel) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentItemRef = useRef<HTMLButtonElement>(null);
  
    const changeItem = (index: number) => {
      setCurrentIndex(index);
    };
  
   
    useEffect(() => {
      // Check if the current item element exists and scroll it into view
      if (currentItemRef.current) {
        currentItemRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, []);
  

    useEffect(() => {
      // Set a timeout for calling the next item in the carousel
      const timeout = setTimeout(() => {
        // Increment the current index and set the new index in the state
        setCurrentIndex(currentIndex + 1);
      }, 2000);
  
      // Return a function that will be called when the component is unmounted
      // to clear the timeout.
      return () => clearTimeout(timeout);
    });
  
    return (
      <div className="carousel-container">
        {items.map((item, index) => (
          <button
            key={item.id}
            ref={index === currentIndex ? currentItemRef : null}
            className={`carousel-item ${
              index < currentIndex ? 'prev' : index > currentIndex ? 'next' : ''
            } game-starter-char`}
            style={
              index === currentIndex
                ? { background: 'lightblue' }
                : { background: 'white' }
            }
            onClick={() => selectHero(item.id)}
          >
            <img src={`${item.img}`} alt={`${item.name}`}></img>
            <div className="Stats">
            <p>Hp: {item.hp} ❤</p>
            <p>Mana: {item.mana} 💧</p>
            <p>Hand Size: {item.handSize} 🃏</p>
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
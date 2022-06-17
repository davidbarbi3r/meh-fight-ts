import React, {useState} from 'react';
import './style/App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Intro from './component/Intro';
import {cardArray, CardModel, ennemiesArray, EnnemyModel, heroArray, HeroModel} from './data/Data';
import Ennemy from './component/Ennemy';
import Cards from './component/Cards';


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)
  const [heroSelected, setHeroSelected] = useState<HeroModel[]>(heroArray) 
  const [ennemies, setEnnemies] = useState<EnnemyModel[]>(ennemiesArray)
  const [deck, setDeck] = useState<CardModel[]>([])
  const [hand, setHand] = useState<CardModel[]>([])
  const [discardPile, setDiscardPile] = useState<CardModel[]>([])
  const [isFighting, setIsFighting] = useState(false)
  const [turnCount, setTurnCount] = useState(0)

  function invokeEnnemy():void {
    if (ennemies.length > 1) {
      setEnnemies(prev => prev)
    } else if (ennemies.length <= 1) {
      setEnnemies(prev => prev)
    }
  }

  const selectHero = (id: number) => {
    const hero = heroArray.filter(hero => hero.id === id)
    setHeroSelected(hero)
  }

  function getDeck ():CardModel[] {
    const deckArray = [...cardArray]
    deckArray.sort(function(a, b){
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    })
    return deckArray
  }
 
  function startFight (deck: CardModel[]):void{   
    let hand:CardModel[] = deck.splice(0,5)
    setHand(hand)
  }
  
  function startGame():void {
    if (heroSelected){
      setIsGameStarted(true)
      setDeck(() => getDeck())
    } else {
      window.alert("You must select a Hero")
      throw new Error ("You must select a Hero")
    }
  }

  function resetGame():void {
    setIsGameStarted(false)
  }

  const useCard = (card: CardModel):void => {
    if (heroSelected[0].mana - card.cost < 0) {
      alert("Not enought mana, end turn")
    } else {
      setHeroSelected(prev => {
        return [{...prev[0], mana: prev[0].mana - card.cost}]})
        setEnnemies(prev => { 
        return [{...prev[0], hp: prev[0].hp - card.damage }]})
      setHand(hand.filter(item => item.id !== card.id))
      setTurnCount(prev => prev++)
    }
  }
  console.log(turnCount)

  console.log(hand)
  console.log(deck)


  const gameHtml = isGameStarted ? 
    <div className='game-content'>  
      <Header resetGame = {resetGame}/>  
      <section className='App-game-container'>
        <div className='App-game-players-container'>
          <h1><Hero hero = {heroSelected}/></h1>
          <h1><Ennemy ennemies = {ennemies}/></h1> 
        </div>
        <div className='App-game-card-container'>
          {hand.length ? <Cards cards = {hand}
                                useCard = {useCard}/> : 
          <button className='std-btn' onClick={() => startFight(deck)}>
            Fight
          </button>}
        </div>
      </section>
    </div> : <Intro startGame = {startGame}
                    heroArray = {heroArray}
                    selectHero = {selectHero}
                    isGameStarted = {isGameStarted}/>
    
  return (
    <div className="App">
      {gameHtml}
    </div>
    )
}

export default App;

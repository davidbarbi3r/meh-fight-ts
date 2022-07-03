import {useState} from 'react';
import './style/App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Intro from './component/Intro';
import {cardArray, CardModel, ennemiesArray, EnnemyModel, heroArray, HeroModel} from './data/Data';
import Ennemy from './component/Ennemy';
import Cards from './component/Cards';

/* Known bugs :
  - Crit / Missed / normal dmg don't work with ennemies,
  - When an Ennemy is dead he stays one turn more,
  - Ennemies change from dog to orc instead of dog to clown to dog,
  - Problem with cards distribution between discardPile & deck & hand */

/* To be implemented : 
  - Crit / Missed / normal dmg with attack cards,
  - Loot when an Ennemy is dead (card ? object ? gold ?),
  - multiple ennemies ? 
  - Display hero caracteristics in hero selection*/

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)
  const [heroSelected, setHeroSelected] = useState<HeroModel>(heroArray[0]) 
  const [ennemies, setEnnemies] = useState<EnnemyModel[]>(ennemiesArray)
  const [currentEnnemy, setCurrentEnnemy] = useState<EnnemyModel>(ennemiesArray[0])
  const [deck, setDeck] = useState<CardModel[]>([])
  const [hand, setHand] = useState<CardModel[]>([])
  const [discardPile, setDiscardPile] = useState<CardModel[]>([])
  const [isFighting, setIsFighting] = useState(false)
  const [turnCount, setTurnCount] = useState(0)

  const selectHero = (id: number) => {
    const hero = heroArray.filter(hero => hero.id === id)[0]
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
    setEnnemies(ennemies.splice(1))
    setIsFighting(true)
    setHand(hand)
    setTurnCount(prev => prev++)
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

  const drawCards= () => {
    let hand:CardModel[] = []
    if (deck.length > 5) {
      hand = deck.splice(0,5)
    } else {
      setDeck(prev => [...prev, ...discardPile])
      setDiscardPile([])
      hand = deck.splice(0,5)
    }
    
    setHand(hand)
  }

  const useCard = (card: CardModel):void => {
    console.log(currentEnnemy.attack)
    if (heroSelected.mana - card.cost < 0) {
      alert("Not enought mana, end turn")
    } else if (currentEnnemy.hp - card.damage <= 0 ){
      setHeroSelected(prev => {
        return {...prev, mana: prev.mana - card.cost}})
        setCurrentEnnemy(prev => { 
        return {...prev, hp: prev.hp = 0 }})
      setDiscardPile(prev => [...prev, card])
      setIsFighting(false)
    } else {
      setDiscardPile(prev => [...prev, card])
      setHeroSelected(prev => {
        return {...prev, mana: prev.mana - card.cost}})
        setCurrentEnnemy(prev => { 
        return {...prev, hp: prev.hp - card.damage }})
      setHand(hand.filter(item => item.id !== card.id))
    }
  }

  function endTurn ():void{
    if (currentEnnemy.hp === 0) {
      //set nouveau current ennemy
      const newEnnemy = ennemies.pop() 
      setHeroSelected(prev => {
        return {...prev, mana: heroArray[0].mana }})
      setCurrentEnnemy(newEnnemy? newEnnemy : currentEnnemy)
      drawCards()
    } else {
      setTimeout(()=> {
        setHeroSelected(prev => {
          return {...prev, hp: prev.hp - currentEnnemy.dmg, mana: heroArray[0].mana }})
        drawCards()
        }, 2000)
    }
    //si ennemy mort : invoquer nouvel ennemy
    //+ remettre main normal + restaurer mana
    //si ennemy pas mort : ennemy realise action
    //+ remettre main normal + restaurer mana
  }

  const gameHtml = isGameStarted ? 
    <div className='game-content'>  
      <Header resetGame = {resetGame}/>  
      <section className='App-game-container'>
        <div className='App-game-players-container'>
          <h1><Hero hero = {heroSelected}/></h1>
          <h1><Ennemy ennemies = {currentEnnemy}/></h1> 
        </div>
        <div className='App-game-card-container'>
          {isFighting ? <div className='App-game-hand-container'>
                          <Cards cards = {hand}
                                useCard = {useCard}/>
                          <button className='std-btn btn-end'
                                  onClick={endTurn}>End turn</button>
                        </div> : 
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

export default App
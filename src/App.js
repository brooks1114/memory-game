import './App.css';
import { useEffect, useState } from 'react'
import SingleCard from './components/SingleCard'


const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" }

]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);


  //shuffle cards
  // [...cardImages, ...cardImages] this syntax will add the card images array once, then again. so shuffleCards now has 2 copies of each card (member of the array cardImages)
  // .sort will compare 2 items. if we return a number less than zero, the numbers remain the same, greater than 0 they swap.Math.random() returns a number between 0-1 by default.
  // the map will allow us to add a random ID property to each card in the array of cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffleCards)
    // We set this to 0 here because everytime we start a new game, shuffle cards is called and will reset the the counter to 0
    setTurns(0)
  }

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //compare 2 cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("those cards match")
        resetTurn()
      } else {
        console.log("those cards do not match")
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className="App">
      <h1>Match Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice} />
        ))
        }
      </div >
    </div >
  );
}

export default App;

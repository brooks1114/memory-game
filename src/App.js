import './App.css';
import { useState } from 'react'


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

  console.group(cards, turns)

  return (
    <div className="App">
      <h1>Match Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src="/img/cover.png" alt="card back" />

            </div>
          </div>
        ))
        }
      </div >
    </div >
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const cardsList = [
    { front: "question 1", back: "answer 1" },
    { front: "question 2", back: "answer 2" },
    { front: "question 3", back: "answer 3" },
    { front: "question 4", back: "answer 4" },
    { front: "question 5", back: "answer 5" },
    { front: "question 6", back: "answer 6" },
    { front: "question 7", back: "answer 7" },
    { front: "question 8", back: "answer 8" },
  ];

  const [flipped, setFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(1);

  function getRelativeCurrentCard(currentCard, cardsListLength) {
    const relative_current_card_number =
      currentCard % cardsListLength
        ? currentCard % cardsListLength
        : cardsListLength;
    return relative_current_card_number;
  }

  function handleFlip() {
    setFlipped(!flipped);
  }

  return (
    <>
      <div id="heading">
        <h2>Element</h2>
      </div>
      <div id="description">
        <p>Description</p>
      </div>
      <div id="numberOfCards">
        <p>
          Card Number: {getRelativeCurrentCard(currentCard, cardsList.length)} /{" "}
          {cardsList.length}
        </p>
      </div>
      <div className="flipcardContainer" onClick={handleFlip}>
        <div className={`flipcard ${flipped ? "flipped" : ""}`}>
          {flipped ? (
            <div className="flipcard_back">
              <p>
                {
                  cardsList[
                    getRelativeCurrentCard(currentCard, cardsList.length) - 1
                  ].back
                }
              </p>
            </div>
          ) : (
            <div className="flipcard_front">
              <p>
                {
                  cardsList[
                    getRelativeCurrentCard(currentCard, cardsList.length) - 1
                  ].front
                }
              </p>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => {
          setCurrentCard(currentCard + 1);
          setFlipped(false);
        }}
      >
        Next
      </button>
    </>
  );
}

export default App;

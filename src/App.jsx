import { useState } from "react";
import "./App.css";
import FlipCard from "./components/FlipCard";

function App() {
  const cardsList = [
    { front: "Which African city is home to the world's largest church by area?", back: "Yamoussoukro" },
    { front: "Which ancient African kingdom had advanced iron smelting technology over 2,000 years ago, long before Europe?", back: "Nok" },
    { front: "Which African country successfully launched its own satellite into space in 1998, becoming the first on the continent to do so?", back: "South Africa" },
    { front: "Who was the first African woman to win a Nobel Peace Prize?", back: "Wangari Maathai" },
    { front: "Which African language family has the largest number of speakers, spanning from West to East Africa?", back: "Niger-Congo" },
    { front: "Which African nation is the world’s largest producer of cocoa beans, essential for chocolate?", back: "Côte d'Ivoire" },
    { front: "Which country is home to the world’s largest population of wild lions?", back: "Tanzania" },
    { front: "Who was the African mathematician from the 4th century whose works influenced later European scholars?", back: "Hypatia" },
    { front: "Which African empire built one of the largest mud-brick structures in the world, the Great Mosque of Djenné?", back: "Mali" },
    { front: "Which African country is the only one to be entirely within the Sahara Desert?", back: "Chad" },
    { front: "Which African kingdom was ruled by Queen Amanirenas, who famously defeated a Roman invasion?", back: "Kush" },
    { front: "Which African city has the highest elevation and is one of the coolest capitals on the continent?", back: "Addis Ababa" },
    { front: "Which African island was once a pirate haven, home to real-life Blackbeard-style legends?", back: "Madagascar" },
    { front: "Which African country has the largest film industry in the world by volume, second only to Bollywood?", back: "Nigeria" },
    { front: "What was the first African nation to qualify for the FIFA World Cup quarter-finals?", back: "Cameroon" },
    { front: "Which African region is known for producing the world's most expensive coffee, Kopi Luwak?", back: "Ethiopia" },
    { front: "What is Africa’s only Spanish-speaking country?", back: "Equatorial Guinea" },
    { front: "Which country is the world's largest producer of uranium, a key element in nuclear energy?", back: "Niger" },
    { front: "What African country’s capital is named after an American president?", back: " Liberia" },
    { front: "Which African kingdom created the first known heart surgery tools over 3,000 years ago?", back: "Egypt" },
    { front: "Which African country was the first to legalize cryptocurrency as an official currency?", back: "Central African Republic" }
  ];

  const [flipped, setFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(1);
  const [inputText, setInputText] = useState("");
  const [feedback, setFeedback] = useState("");

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

  const handleInput = (event) => setInputText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const correctAnswer = cardsList[getRelativeCurrentCard(currentCard, cardsList.length) - 1].back;
    if (inputText.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
      setFeedback(`Correct! The answer is ${correctAnswer}!`);
      setFlipped(true);
    } else {
      setFeedback("Incorrect! Try again!");
    }
  };

  return (
    <>
      <div id="heading">
        <h1>Elements</h1>
      </div>
      <div id="description">
        <p>Think you know Africa? Think again. This isn’t your typical ‘largest desert’ trivia. We’re talking about scientific breakthroughs, legendary rulers, mind-blowing geography, and cultural gems you probably never heard of. No clichés, no myths—just raw, unfiltered African brilliance. Let’s see if you can keep up.</p>
      </div>
      <div id="numberOfCards">
        <p>
          {getRelativeCurrentCard(currentCard, cardsList.length)} /{" "}
          {cardsList.length}
        </p>
      </div>
      <FlipCard
        flipped={flipped}
        handleFlip={handleFlip}
        card={cardsList[getRelativeCurrentCard(currentCard, cardsList.length) - 1]}
      />
      <div id="bottomMenu">
        <button id="prevButton" onClick={() => {
          setCurrentCard((currentCard - 1) ? (currentCard - 1) : 1);
          setFlipped(false);
          setFeedback("");
          setInputText("");
        }}>
          Back
        </button>
        <form onSubmit={handleSubmit}>
          <input id="answerInput" type="text" value={inputText} placeholder="Type your answer" onChange={handleInput}></input>
          <input id="submitButton" type="submit"></input>
        </form>
        <button id="nextButton"
          onClick={() => {
            setCurrentCard(currentCard + 1);
            setFlipped(false);
            setFeedback("");
            setInputText("");
          }}
        >
          Next
        </button>
      </div>
      <div id="feedback">{feedback}</div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import FlipCard from "./components/FlipCard";

function App() {
  const cardsList = [
    { front: "Which African city is home to the world's largest church by area?", back: "Yamoussoukro, Côte d'Ivoire (Basilica of Our Lady of Peace)" },
    { front: "Which ancient African kingdom had advanced iron smelting technology over 2,000 years ago, long before Europe?", back: "The Nok Civilization (Nigeria)" },
    { front: "Which African country successfully launched its own satellite into space in 1998, becoming the first on the continent to do so?", back: "South Africa (SUNSAT-1)" },
    { front: "Who was the first African woman to win a Nobel Peace Prize?", back: "Wangari Maathai (Kenya, 2004, for environmental activism)" },
    { front: "Which African language family has the **largest number of speakers**, spanning from West to East Africa?", back: "The Niger-Congo language family" },
    { front: "Which African nation is the **world’s largest producer of cocoa beans**, essential for chocolate?", back: "Côte d'Ivoire" },
    { front: "Which country is home to the world’s **largest population of wild lions**?", back: "Tanzania" },
    { front: "Who was the African mathematician from the 4th century whose works influenced later European scholars?", back: "Hypatia of Alexandria (Egypt)" },
    { front: "Which African empire built **one of the largest mud-brick structures** in the world, the Great Mosque of Djenné?", back: "The Mali Empire" },
    { front: "Which African country is the **only one** to be entirely within the Sahara Desert?", back: "Chad" },
    { front: "Which African kingdom was ruled by Queen Amanirenas, who famously defeated a Roman invasion?", back: "The Kingdom of Kush (Nubia, present-day Sudan)" },
    { front: "Which African city has the highest elevation and is one of the coolest capitals on the continent?", back: "Addis Ababa, Ethiopia" },
    { front: "Which African island was once a pirate haven, home to real-life Blackbeard-style legends?", back: "Île Sainte-Marie, Madagascar" },
    { front: "Which African country has the **largest film industry in the world by volume**, second only to Bollywood?", back: "Nigeria (Nollywood)" },
    { front: "What was the first African nation to qualify for the FIFA World Cup quarter-finals?", back: "Cameroon (1990 World Cup)" },
    { front: "Which African region is known for producing the world's **most expensive coffee**, Kopi Luwak?", back: "Ethiopia" },
    { front: "What is Africa’s **only Spanish-speaking** country?", back: "Equatorial Guinea" },
    { front: "Which country is the world's largest producer of uranium, a key element in nuclear energy?", back: "Niger" },
    { front: "What African country’s capital is named after an American president?", back: "Liberia (Monrovia, named after James Monroe)" },
    { front: "Which African kingdom created the first known heart surgery tools over 3,000 years ago?", back: "Ancient Egypt" },
    { front: "Which African country was the first to legalize **cryptocurrency as an official currency**?", back: "The Central African Republic (2022)" }
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

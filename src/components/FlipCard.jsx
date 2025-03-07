import React from "react";
import "../App.css";

function FlipCard({ flipped, handleFlip, card }) {
  return (
    <div className="flipcardContainer" onClick={handleFlip}>
      <div className={`flipcard ${flipped ? "flipped" : ""}`}>
        {flipped ? (
          <div className="flipcard_back">
            <p>{card.back}</p>
          </div>
        ) : (
          <div className="flipcard_front">
            <p>{card.front}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FlipCard;

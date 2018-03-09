import React from "react";

import "./guess-tracker.css";

export default function GuessTracker(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>{guess}</li>
  ));

  return (
    <div className="guess-tracker">
      <ul id="guessTracker">Guess Tracker: {guesses} </ul>
    </div>
  );
}
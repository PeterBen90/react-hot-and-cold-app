import React from "react";

import { connect } from "react-redux";

import "./guess-tracker.css";

export function GuessTracker(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>{guess}</li>
  ));

  return (
    <div className="guess-tracker">
      <ul id="guessTracker">Guess Tracker: {guesses} </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  guesses: state.guesses
});

export default connect(mapStateToProps)(GuessTracker);

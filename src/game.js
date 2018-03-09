import React, { Component } from 'react';
import './game.css';
import NavBar from './components/nav-bar';
import InputForm from './components/input-form';
import Counter from './components/counter';
import GuessTracker from './components/guess-tracker';


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      hotCold: "Look!",
      currentNumber: Math.floor(Math.random() * 100) + 1
    };
  }

  setGuess(currentGuess) {
    currentGuess = parseInt(currentGuess, 10);
    if (isNaN(currentGuess)) {
      this.setState({ feedback: "Please enter a valid number" });
      return;
    }

    const difference = Math.abs(currentGuess - this.state.currentNumber);

    let hotCold ;

    if (difference >= 20) {
      hotCold = "Cold";
    } else if (difference >= 10) {
      hotCold = "Warm";
    } else if (difference >= 5) {
      hotCold = "Hot";
    } else if (difference >= 1) {
      hotCold = "Burning!";
    } else {
      hotCold = "Correct!";
    }

    this.setState({
      hotCold,
      guesses: [...this.state.guesses, currentGuess]
    });
  }

  render() {
    const { hotCold, guesses } = this.state;
    const counter = guesses.length;
    const title = "HOT or COLD";
    return (
      <div className="Game">
        <NavBar />
        <h1>{title}</h1>
        <InputForm onSetGuess={currentGuess => this.setGuess(currentGuess)} />
        <Counter counter={counter}/>
        <GuessTracker guesses={guesses} />
      </div>
    );
  }
}

export default Game;
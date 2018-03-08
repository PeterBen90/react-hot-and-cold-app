import React, { Component } from 'react';
import './game.css';
import Container from './components/container';
import NavBar from './components/nav-bar';


class Game extends Component {
  render() {
    const title = "HOT or COLD";
    return (
      <div className="Game">
        <NavBar />
        <h1 className="header">{title}</h1>
        <Container />
      </div>
    );
  }
}

export default Game;
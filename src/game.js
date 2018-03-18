import React from 'react';
import './game.css';
import NavBar from './components/nav-bar';
import HotCold from './components/hot-cold';
import InputForm from './components/input-form';
import Counter from './components/counter';
import GuessTracker from './components/guess-tracker';


export default function Game(props){
    return (
      <div className="Game">
        <NavBar />
        <h1>Hot or Cold</h1>
        <HotCold />
        <InputForm  />
        <Counter />
        <GuessTracker />
      </div>
    );
}

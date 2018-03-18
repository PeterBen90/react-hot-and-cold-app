import React from 'react';
import { connect } from 'react-redux';

import { restartGame } from '../actions';

import './nav-bar.css';

export function NavBar(props) {
  return (
    <div className="nav-bar">
      <nav className="nav-bar-nav">
        <ul>
          <li className="new-game">
            <a href="#New"
               className="restart"
               aria-label="restart"
               onClick={() =>
                props.dispatch(
                    restartGame(Math.floor(Math.random() * 100) + 1)
                )}>
            +NEW GAME
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default connect()(NavBar);
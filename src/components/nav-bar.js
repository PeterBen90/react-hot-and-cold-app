import React from 'react';

import './nav-bar.css';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <nav className="nav-bar-nav">
        <ul>
          <li className="about">
            <a href="#what"
               className="what"
               aria-label="How to play"
            >
            WHAT?
            </a>
          </li>
          <li className="new-game">
            <a href="#New Game"
               className="restart"
               aria-label="restart"
            >
            +NEW GAME
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
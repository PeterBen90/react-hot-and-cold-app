import React from 'react';

import './nav-bar.css';

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <nav className="nav-bar-nav">
        <ul>
          <li className="new-game">
            <a href="#New"
               className="restart"
               aria-label="restart"
               onClick={() => props.onRestartGame()}
            >
            +NEW GAME
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
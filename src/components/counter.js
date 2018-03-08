import React from 'react';

import './counter.css';

export default function Counter() {
  const count = "Guess # "
  const tracker = "Number Tracker: "
  return (
    <div className="counter">
      <h3>{count}<span className="count">0</span></h3>
      <p>{tracker}<span className="track">0</span></p>
    </div>
  );
}
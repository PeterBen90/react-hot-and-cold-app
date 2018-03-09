import React from "react";

import "./counter.css";

export default function Counter(props) {
  return (
    <div className="counter">
      <h3>Guess # {props.counter}</h3>
    </div>
  );
}

import React from "react";

import "./hot-cold.css";

export default function HotCold(props) {
  return (
    <div className="clue">
      <h2>{props.hotCold}</h2>
    </div>
  );
}
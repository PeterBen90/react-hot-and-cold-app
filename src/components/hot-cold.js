
import React from "react";

import { connect } from "react-redux";

import "./hot-cold.css";

export function HotCold(props) {
  return (
    <div className="clue">
      <h2>{props.hotCold}</h2>
    </div>
  );
}

const mapStateToProps = state => ({
  hotCold: state.hotCold
});

export default connect(mapStateToProps)(HotCold);
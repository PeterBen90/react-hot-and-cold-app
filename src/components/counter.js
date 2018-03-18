import React from "react";

import {connect} from 'react-redux';

import "./counter.css";

export function Counter(props) {
  return (
    <div className="counter">
      <h3>Guess # <span>{props.counter}</span></h3>
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state.guesses.length
});

export default connect(mapStateToProps)(Counter);
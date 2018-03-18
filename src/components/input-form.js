import React, { Component } from 'react';

import { connect } from 'react-redux';

import { makeGuess } from '../actions';

import './input-form.css';

class InputForm extends Component {
    onSubmit(event) {
        event.preventDefault();


        const value = this.input.value;
        this.props.dispatch(makeGuess(value));
        this.input.value = "";
        this.input.focus();
    }

    render() {
        return (
        <form onSubmit={e => this.onSubmit(e)}>
            <label htmlFor="Guess"></label>&emsp;
            <input
                aria-controls="number-input"
                type="number"
                className="text"
                min="1"
                max="100"
                id="guess"
                name="guess"
                placeholder="Enter your guess"
                autoComplete="off"
                ref={input => (this.input = input)}
                required
            />
            <button type="submit">Guess</button>
        </form>
    );
    }

}

export default connect ()(InputForm);
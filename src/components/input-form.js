import React, { Component } from 'react';

import './input-form.css';

class InputForm extends Component {
    onSubmit(event) {
        event.preventDefault();

        if (this.props.onSetGuess) {
            const value = this.input.value;
            this.props.onSetGuess(value);
        }
        this.input.value = "";
    }

    render() {
        return (
        <form onSubmit={e => this.onSubmit(e)}>
            <label htmlFor="Guess"></label>&emsp;
            <input
                aria-controls="number-input"
                type="number"
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

export default InputForm;
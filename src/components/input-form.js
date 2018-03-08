import React from 'react';

import './input-form.css';

export default function InputForm(props) {
    return (
        <form>
            <label htmlFor="Guess"></label>&emsp;
            <input
                aria-controls="number-input"
                type="number"
                id="guess"
                name="guess"
                placeholder="Enter your guess"
            />
            <button>Guess</button>
        </form>
    );
}

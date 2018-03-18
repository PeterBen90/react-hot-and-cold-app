import {RESTART_GAME, MAKE_GUESS} from '../actions';

const initialState = {
  guesses: [],
  hotCold: "Pick a number between 1 and 100",
  correctAnswer:  Math.round(Math.random() * 100) + 1
};

export default (state = initialState, action) => {
    if (action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            guesses: [],
            hotCold: "Pick a number between 1 and 100",
            correctAnswer: action.correctAnswer
        });
    }

    if (action.type === MAKE_GUESS) {
        let hotCold, guess;

        guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            hotCold = 'Please enter a valid number.';

            return Object.assign({}, state, {
                hotCold,
                guesses: [...state.guesses, guess]
            });
        }

        const difference = Math.abs(guess - state.correctAnswer);

        if (difference >= 50) {
            hotCold = "You're Ice Cold...";
        } else if (difference >= 30) {
            hotCold = "You're Cold...";
        } else if (difference >= 10) {
            hotCold = "You're Warm.";
        } else if (difference >= 1) {
            hotCold = "You're Hot!";
        } else {
            hotCold = 'You got it!';
        }

        return Object.assign({}, state, {
            hotCold,
            guesses: [...state.guesses, guess]
        });
    }

    return state;
};
import { createStore } from 'redux';

export const counterInitialState = {count:0}

const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
}

export const INCREMENT_ACTION = { type: ACTIONS.INCREMENT };
export const DECREMENT_ACTION = { type: ACTIONS.DECREMENT };

function counterReducer(state = counterInitialState, action) {
    switch(action.type) {
        case "INCREMENT": {
            return { count: state.count + 1 };
        }
        case "DECREMENT": {
            return { count: state.count -1 };
        }

        default:
            return state;
    }
}
  
export const store = createStore(counterReducer)
import { combineReducers, createStore } from "redux";
import { ACTIONS } from "../actions/transactionAction";

// const isInitialCachePresent = localStorage.getItem("transactions") != null;
// const initialState = isInitialCachePresent
//     ? JSON.parse(localStorage.getItem("transactions") || "")
//     : [];

//    let id = initialState.length;

const transactionInitialState = JSON.parse(localStorage.getItem("transactions")).transactions;
// id key increment
let id = transactionInitialState.length;

function transactionReducer(state = transactionInitialState, action) {
    if (action.type === ACTIONS.ADD) {
        // tx is transaction
        const tx = { ...action.payload, id: ++id };
        return [...state, tx];
    }       
    
    if (action.type === ACTIONS.DELETE) {
        return state.filter((tx) => tx.id !== action.id);
    }  

    if (action.type === ACTIONS.UPDATE) {
        return [...state.filter((tx) => tx.id !== action.payload.id), action.payload];
    }  
    return state;
}

function selectedTxReducer(state = null, action) {
    if (action.type === ACTIONS.SET_ACTIVE) {
        return action.tx;
    }
    if (action.type === ACTIONS.DELETE) {
        if (state?.id !== action.id) return state;
        return null;
    }
    if (action.type === ACTIONS.RESET_SELECTED) {
        return null;
    }
    return state;
}

const rootReducer = combineReducers({
    transactions: transactionReducer,
    selectedTx: selectedTxReducer
});

export const store = createStore(rootReducer);
store.subscribe(() => localStorage.setItem("transactions", 
JSON.stringify(store.getState())));
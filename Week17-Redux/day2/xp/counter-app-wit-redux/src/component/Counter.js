import React, { Component } from 'react'
import { INCREMENT_ACTION, DECREMENT_ACTION } from '../actions';
import { initialState, store } from '../reducers/counter';
import "./Counter.css"

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = initialState; // {count:0}
        store.subscribe(() => this.setState(store.getState()));
    }

    increment = () => {
        store.dispatch(INCREMENT_ACTION)
    }

    decrement = () => {
        store.dispatch(DECREMENT_ACTION)
    }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <div className='flex'>
            <button onClick={this.increment}>+</button>
            <h2>{this.state.count}</h2>
            <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react'
import { INCREMENT_ACTION, DECREMENT_ACTION } from '../reducers/counterReducer';
import { counterInitialState, store } from '../reducers/counterReducer';
import { Provider } from 'react-redux';

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = counterInitialState; // {count:0}
        store.subscribe(() => this.setState(store.getState()));
      }

  Increment = () => {
      store.dispatch(INCREMENT_ACTION)
      console.log("ok");
  }

  Decrement = () => {
      store.dispatch(DECREMENT_ACTION)
      console.log('ALRIGH');
  }

  incrementIfOdd = () => {
      if (store.getState() % 2 !== 0) {
        
        store.dispatch({
          type: 'INCREMENT'
        })
      }
  }

  incrementAsync = () => {
    setTimeout(function() {
      store.dispatch({
        type: 'INCREMENT'
      })
    }, 1000)
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <p> Clicked: {this.state.count} times </p>
          <button onClick={this.Increment}>+</button>
          <button onClick={this.Decrement}>-</button>

          <button onClick={this.incrementIfOdd}> Increment if odd</button>
          <button onClick={this.incrementAsync}> Increment async</button>
        </div>
      </Provider>
    )
  }
}

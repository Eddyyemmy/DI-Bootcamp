import React, { Component } from 'react';
import "./App.css"; 

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>Todo's</h1>
        <div className="todo-list">
          <p className="todo">Buy some milk</p>
          <p className="todo">Do some homework</p>
        </div> 
        <p className="no-todos">You have no todo left, yay!</p>
        <form>
          <label htmlFor="input-text">Add a new todo:</label>
          <input type="text" id="input-text" />
        </form>
      </div>
    );
  }
}

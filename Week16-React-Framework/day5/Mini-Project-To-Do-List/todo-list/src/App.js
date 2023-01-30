import React, { Component } from 'react';
import "./App.css"; 

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state ={ todos: ["Buy some milk", "Do my homework"] };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const inputText = document.getElementById("input-text");
    const todo = inputText.value;
    this.setState({todos: [...this.state.todos, todo]});
    inputText.value = "";
  };

  handleClick = (todoToDelete) => {
    console.log(todoToDelete);
    this.setState({ todos: this.state.todos.filter((el) => el !== todoToDelete) });
  }
  render() {
    return (
      <div className="container">
        <h1>Todo's</h1>
        <div className="todo-list">
          {this.state.todos.map((todo) => (
            <div key={todo} className="todo" onClick={() => this.handleClick(todo)}>
                {todo}
            </div>
          ))}
        </div> 
        {this.state.todos.length === 0 && <p className="no-todos">You have no todo left, yay!</p>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="input-text">Add a new todo:</label>
          <input type="text" id="input-text" />
        </form>
      </div>
    );
  }
}

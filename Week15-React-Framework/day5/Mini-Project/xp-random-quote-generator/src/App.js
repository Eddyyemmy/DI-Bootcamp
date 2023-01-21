import React, { Component } from 'react';
import './app.css';
import { quotes } from "./data/quotes";
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {quote: null, author: null, currentIndex: 0};
  };

  componentDidMount(){
    const randomQuote = quotes[this.state.currentIndex];
    this.setState({ quote: randomQuote.quote, author: randomQuote.author });
  };

  handleClick = () => {
    this.setState((state) => {
      const newIndex = state.currentIndex + 1;
      const randomQuote = quotes[newIndex];
      return {
        currentIndex: state.currentIndex +1,
        quote: randomQuote.quote, 
        author: randomQuote.author,
      };
    });
    this.changeBackgroundColor();
  };

  changeBackgroundColor = () => {
    const root = document.querySelector(":root");
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    root.style.setProperty("--primary-color", "#"+ randomColor);
  };

  render() {
    return (
      <div className='quoteBox'>
        <h1>{this.state.quote}</h1>
        <h2>{this.state.author}</h2>
        <div className='button-container'>
          <button onClick={this.handleClick}>New Quote</button>
        </div>
      </div>
    )
  }
}

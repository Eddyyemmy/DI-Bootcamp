import React, { Component } from 'react'
import "./App.css";
import heroes from "./data/heros.json"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { heroes: heroes.superheroes, clickedHeroes: [], score: 0, topScore: 0 }
  }

  handleClick = (heroName) => {
    this.setState((state) => {
      const newScore = state.clickedHeroes.includes(heroName) ? 0 : state.score + 1;
      const clickedHeroes = state.clickedHeroes.includes(heroName) ? [] : [ ...this.state.clickedHeroes, heroName];

      return ({ 
        heroes: [...heroes.superheroes].sort((a, b)=>(Math.random() > 0.5 ? -1 : 1)), 
        clickedHeroes: clickedHeroes,
        score: newScore,
        topScore: Math.max(newScore, state.topScore)
      });
    });
    // Making copy of an exisiting Array => [ ...heroes.superheroes]
    console.log("This got click");
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <nav  className="navbar">
          <h1>Superheroes Memory Game</h1>
          <div className="result">Score: {this.state.score}</div>
          <div className="result">TOP Score: {this.state.topScore}</div>
        </nav>
        <div className="rules">Get points by clicking on an image but do not click the same one twice</div>
        <div className="heroes-container">
          {this.state.heroes.map((hero) => (
            <div key ={hero.id} className="hero-card" onClick={()=>this.handleClick(hero.name)}>
              <div className="image-container">
                <img src={hero.image}  alt="Super Heroes" />
              </div>
              <p>
                <span className='char-bold'>Name:</span> {hero.name}
              </p>
              <p>
                <span className='char-bold'>Occupation:</span> {hero.occupation}
              </p>
            
            </div>
          ))}
        </div>
      </div>
    )
  }
}

import React from 'react';
import Card from './component/Card';
import './App.css';

const cardsInfo = [ 
  {points: `3,000`, icon: 'fa-solid fa-hand-point-right', title: 'Points'}, 
  {points: `6,540`, icon: 'fa-solid fa-bolt', title: 'Lightenings'},
  {points: `337,010`, icon: 'fa-solid fa-hand-peace', title: 'Shakes'},
  {points: `98,661`, icon: 'fa-regular fa-gem', title: 'Diamond'},



  {points: null, icon: null, title: null}, 
  {points: '', icon: '', title: ''},
  {points: undefined, icon: undefined, title: undefined},
  {points: `98,661`, icon: 'fa-regular fa-gem', title: 'diamond'},
  {points: `3,000`, icon: 'fa-solid fa-hand-point-right', title: 'points'}, 
  {points: `6,540`, icon: 'fa-solid fa-bolt', title: 'Lightenings'},
  {points: `337,010`, icon: 'fa-solid fa-hand-peace', title: 'shakes'},
  {points: `98,661`, icon: 'fa-regular fa-gem', title: 'diamond'},
  {points: `3,000`, icon: 'fa-solid fa-hand-point-right', title: 'points'}, 
  {points: `6,540`, icon: 'fa-solid fa-bolt', title: 'Lightenings'},
  {points: `337,010`, icon: 'fa-solid fa-hand-peace', title: 'shakes'},
  {points: `98,661`, icon: 'fa-regular fa-gem', title: 'diamond'}
]

function App() {
  return (
    <div className='app'>
      {cardsInfo.map((card, index) => <Card info={card} key= {index} />)}
    </div>
  );
}

export default App;

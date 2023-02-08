import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
    constructor(props){
        super(props)
        console.log(props);
    }

    pickRandomNumber() {
        return Math.floor(Math.random() * 8000) + 1
    }

    pickRandomTitle() {
        const defaultTitle = ['Benjamin', 'Abel', 'Ilia', 'Eyial', 'ava']
        const index = Math.floor(Math.random() * defaultTitle.length);
        return defaultTitle[index];
    }
  render() {
    // const icon = this.props.info.icons;
    // const title = this.props.info.title
    // const points = this.props.info.points

    const {icon, title, points} = this.props.info
    const isPropEmpty = (icon) => [null, undefined, ""].includes(icon);
    const iconName = isPropEmpty(icon) ? "fa-solid fa-question" : icon;

    const pointsNumber = isPropEmpty(points) ? this.pickRandomNumber() : points;
    const titleName = isPropEmpty(title) ? this.pickRandomTitle() : title;
    return (
      <div className='card'> 
        <div className='card_subtitle'>
            <i className={iconName}></i>
            <h2>{titleName}</h2>
        </div>
        <h3>{pointsNumber}</h3>
      </div>

    )
  }
}

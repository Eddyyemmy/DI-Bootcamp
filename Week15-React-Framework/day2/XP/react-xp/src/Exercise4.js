import React from 'react';
import './Exercise4.css';

function Exercise4(){
  const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

    return (
      <div className='para'>
        <h1 style={{color: "red", backgroundColor: "lightblue"}}>This is a Header</h1>
        <h1 style={style_header}>This is a Header</h1>
        <p className='para'>This is a paragraph</p>
        <a href='Facebook.com'>This is a Link</a>
        <form>
            <label>This is a Form</label><br/>
            <input type='text' placeholder='Search..'/>
            <input type='submit' value='Submit'/>
        </form>
        <h3>Here is an Image</h3>
        <img alt='robots' src={`https://cdn.thenewstack.io/media/2022/06/1270f621-600b72f9-react-1024x680-1.png`} />
        <h4>This is a List</h4>
        <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
      </div>
    )
}

export default Exercise4;

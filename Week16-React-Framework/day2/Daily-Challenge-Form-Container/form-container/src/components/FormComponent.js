import React, { Component } from 'react'
import './formout.css';

export default class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fname: '',
      lname: '',
      age: '',
      destination: '',
      gender:'',
      dietary: '',
      lactose: '',
      vegan: '',
    };
  }

  
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox'  ? e.target.checked : e.target.value
     this.setState({[name]: value});
    console.log(e.target.type, e.target.checked);
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    alert('Submission Successful...');
  }
  
  render() {
    return (
      <div>
        <h1>Sample form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type='text' 
              placeholder='First Name' 
              name='fname'
              onChange={this.handleChange}
              />
          </div>

          <div>
            <input 
              type='text' 
              placeholder='Last Name' 
              name='lname' 
              onChange={this.handleChange}
              />
          </div>

          <div>
            <input type='text' placeholder='Age' name='age' value={this.age} 
            onChange={this.handleChange}/>
          </div>

          <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            />
            Male
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            />
            Female
          </label>
        </div>
          <div>
            <label for="destination">Select your destination</label> <br/>
            <select id="destination" name="destination" value={this.lname}
              onChange={this.handleChange}>
              <option value="#">-- Please choose a destination --</option>
              <option value="thailand">Thailand</option>
              <option value="japan">Japan</option>
              <option value="brazil">Brazil</option>
            </select>
          </div>

            <legend>Dietary restriction:</legend>
            <div>
              <input type="checkbox" id="nutsfree" name="dietary" onChange={this.handleChange}/>
              <label for="nutsfree">Nuts free</label>
            </div>

            <div>
              <input type="checkbox" id="lactosefree" name="lactose" onChange={this.handleChange}/>
              <label for="lactosefree">Lactose free</label>
            </div>

            <div>
              <input type="checkbox" id="vegan" name="vegan" onChange={this.handleChange}/>
              <label for="vegan">Vegan</label>
            </div>
            <button type="submit">Submit</button>
        </form>

        <div className='display'>
          <h1>Entered Information</h1>
          <p>Your name: {this.state.fname} {this.state.lname}</p>
          <p>You Age: {this.state.age}</p>
          <p>Your gender: {this.state.gender.toString()}</p>
          <p>Your destination: {this.state.destination}</p>
          <p>Your dietary restrictions:</p>
          <p>**Nuts free: {this.state.dietary ? 'Yes' : 'No'}</p>
          <p>**Lactose free: {this.state.lactose ?'Yes' : 'No'}</p>
          <p>**Vegan Meal: {this.state.vegan ? 'Yes' : 'No'}</p>
        </div>
      </div>
    )
  }
}

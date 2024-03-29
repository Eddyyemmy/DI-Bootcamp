
import React, { Component } from 'react'

export default class Show extends Component {
    constructor(props) {
      super(props);
  
      this.state = {show: true};
    }
  
    delHeader = () => {
      this.setState({show: false});
    }
  
    render() {
      let myheader;

      if (this.state.show) {
        myheader = <Child />;
      };
  
      return (
  
        <div>
  
            {myheader}
            <button onClick={this.delHeader}>Delete Header</button>
  
        </div>
  
      );
  
    }
  
  }
  
  class Child extends React.Component {
  
    componentWillUnmount() {
      alert( 'The component named Header is about to be unmounted.');
    }
  
    render() {
      return (
        <h1>Hello World!</h1>
      );
  
    }
  
  }
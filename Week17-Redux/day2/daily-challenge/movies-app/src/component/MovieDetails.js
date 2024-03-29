import React, { Component } from 'react'
import { connect } from 'react-redux'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <h2>Movie Details</h2>
        <h3> Title: {this.props.selectedMovie.title}</h3>
        <h4>Release Date: {this.props.selectedMovie.releaseDate}</h4>
        <h5>Rating: {this.props.selectedMovie.rating}</h5>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}
  export default connect(mapStateToProps)(MovieDetails)

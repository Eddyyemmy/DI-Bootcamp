import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/movieActions';

class MovieList extends Component {
    constructor(props) {
        super(props);
        console.log('p', props);
    }
    handleClick = (title) => {
        this.props.dispatch(selectMovie(title));
    };
    render() {
        return (
        <div>
            <h1>MovieList</h1>
            <h2>Current selected: {this.props.selectedMovie} </h2>
            {this.props.movies.map((movies) => 
                <div key ={movies.title}>
                    <span>{ movies.title }</span>  
                    <button onClick={ ()=>this.handleClick(movies.title) }>Detail</button>
                </div>
            )}
        </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    selectedMovie: state.selectedMovie
})

export default connect(mapStateToProps)(MovieList)
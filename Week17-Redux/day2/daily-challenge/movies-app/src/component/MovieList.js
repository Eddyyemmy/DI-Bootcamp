import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/movieActions';

class MovieList extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = (title) => {
        if (title === this.props.selectMovie)
        console.log(this.props.selectMovie);
        return this.props.dispatch(selectMovie(title));
        
    };
    render() {
        return (
        <div>
            <h1>MovieList</h1>
            {this.props.movies.map((movies) => 
                <div key ={movies.title}>
                    <span>{movies.title}</span>  
                    <button onClick={()=>this.handleClick(movies.title)}>Detail</button>
                </div>
            )}
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        movies: state.movies,
        selectedMovie: state.selectedMovie
    }
};

export default connect(mapStateToProps)(MovieList)
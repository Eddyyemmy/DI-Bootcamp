import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
    constructor(props) {
        super(props);
        console.log('p', props);
    }
    handleClick = () => {
        this.props.dispatch("Hello")
    }
    render() {
        return (
        <div>
            <h1>MovieList</h1>
            {this.props.movies.map((movies) => 
                <div key ={movies.title}>
                    <span>{ movies.title }</span>  
                    <button onClick={this.handleClick}>Click</button>
                </div>
            )}
        </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state
})

export default connect(mapStateToProps)(MovieList)
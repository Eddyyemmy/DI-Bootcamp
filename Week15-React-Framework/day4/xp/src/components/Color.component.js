import React from "react";

export class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor: "red" };
    }

    reverseColor = () => {
        this.setState ({favoriteColor: "blue"})
    };

    render() {
        return (
        <>
            <h1>My favorite color is : {this.state.favoriteColor} </h1>
            <button onClick={this.reverseColor}>Reverse Color</button>
        </>)
        
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor: "yellow"})
        }, 3000);
    }
}
import React from "react";

const clickMe = () => alert('Auch! Clicked');
const handleKeyPress = (e) => {
    if (e.key != 'Enter') return;
    const message = 'The Enter key was pressed, your input is: ' + e.target.value;
    alert(message);
}

export class Events extends React.Component {
    toggle = () => {
        this.setState({isToggledOn: !this.state.isToggledOn})
        console.log(this.state);
    }
    constructor(props) {
        super(props);
        this.state = { isToggledOn: true };
    }

    render () {

        return <>
            <h2>Hello from Events component</h2>
            <button onClick={clickMe}>Click</button>
            <input type='text' onKeyPress={handleKeyPress} />
            <button onClick={this.toggle}>{this.state.isToggledOn ? "ON" : "OFF"}</button>
        </>
    }
}
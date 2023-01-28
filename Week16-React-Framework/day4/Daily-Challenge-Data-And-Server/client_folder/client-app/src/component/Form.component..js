import React from "react";

export class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    handleSubmit = () =>{
        e.preventDefault()
    };

    render() {
        return (
            <form>
                <input type="text" placeholder="Input something" />
                <input type="submit" value="Submit" onClick={ this.handleSubmit }/>
            </form>
        )
    }
}
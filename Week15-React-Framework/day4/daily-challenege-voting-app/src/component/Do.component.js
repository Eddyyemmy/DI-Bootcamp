import React from "react";
import "./Do.component.css";

export class Language extends React.Component {
    constructor(props){
        super(props);
    }
    
    handleClick = () => {
        this.props.incrementCount();
    }

    render(){
        return <>
            <div className="language">
                <span>{this.props.votes}</span>
                <span>{this.props.name}</span>
                <button onClick={this.handleClick}>Click Here</button>
            </div>
        </>
    }
}
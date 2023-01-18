import React from "react";
import { Garage } from "./Garage.component";  
const carinfo = {name: "Ford", model: "Mustang"};

export class Car extends React.Component {
    constructor() {
        super();
        this.state = { color: "red" };
    }

    render() {
        return(
            <>
                <header>This car is {carinfo.model} </header>
                <p>This car is {this.state.color} {carinfo.model}</p>
               
                <p>Garage from Garage Component:</p>
                <Garage size='small'/>
            </>
        ) 
    }
}
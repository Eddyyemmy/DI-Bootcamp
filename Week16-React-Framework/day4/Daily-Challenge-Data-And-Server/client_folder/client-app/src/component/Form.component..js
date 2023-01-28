import React from "react";

export class Form extends React.Component {
   

    handleSubmit = async (e) =>{
        e.preventDefault()
        
        const message = document.getElementById("input").value
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message })
        };
        const url = "http://localhost:3001/api/world";
        try {
            const resJson = await fetch(url,options);
            const res = await resJson.json();
            this.props.setMessage(res.message)
        } catch(err) {
            console.error(err);
        }
    };

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input type="text" placeholder="Input something" id="input"/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
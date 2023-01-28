import React from "react"
import { Form } from "./component/Form.component."

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {messageFromServer: null}
  }
  async componentDidMount(){
    const url = "http://localhost:3001/api/hello"
    try{
      const resText = await fetch(url)
      const res = await resText.text();
      this.setState({messageFromServer: res})
    }catch (err){
      console.error(err);
    }
  }
  render() {
   return(
      <>
        <Form />
        <h1>{this.state.messageFromServer}</h1>
      </>
   ) 
  }
}
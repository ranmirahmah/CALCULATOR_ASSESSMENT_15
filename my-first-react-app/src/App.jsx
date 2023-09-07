import React, { Component } from 'react'
import "./index.css"

export class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      backgroundColor : "black"
    };
  }

  // method used to update the backgrounColor
  updateBackgroundColor(color) {
    this.setState(this.state =
       {backgroundColor : color})
  }

  render() {
    return (
      <div style = {
        {height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: this.state.backgroundColor
        }}
        >
        
        <input type='text' style={{borderColor: "blue"}} onChange={(e) => this.updateBackgroundColor(e.target.value)}/>


      </div>
    )
  }
}

export default App
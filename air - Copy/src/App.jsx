// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       name : "ifeoluwa"
//     }
//   }
//   affidavit = (e) => {
//     this.setState({
//       name: e.target.value
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>My name is {this.state.name} </h1>
//         <input type="text"  
//         onChange={this.affidavit}/>
//       </div>
//     )

//   }
  
//   }



// import React, { Component } from 'react'


// export default class App extends Component {
//     constructor(props){
//       super(props)
//       this.state = {
//         name: "Rahmat" ,address: "Igbogbo"

//       }
//     }


//   render() {
//     return (
//       <div>
//         <h1>My name is {this.state.name} and i live in {this.state.address}.</h1>
//       </div>
//     )
//   }
// }

import { useState } from "react";


const App = () => {
  const [name, setName] = useState("Mathew");

  const affidavit = (e) => {
    setName(e.target.value)
  }
  return (
    
    <div>
      <h1>my name is {name}</h1>
      <input type="text" onChange={affidavit}/>
    </div>
  );
}

export default App


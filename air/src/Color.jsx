import React, { useState } from 'react'


const Color = () => {
    
    const [color, setColor] = useState("red")

    const Change = (color) => {
        setColor (color)
    }
  return (
    <div style= {{backgroundColor: color, height: "100svh", display: 'flex' , justifyContent: "center", alignItems: "center"}}>
    {/* <div>Color</div> */}
    <button onClick={Change}>CHANGE</button>
    <input type="text" onChange={(e) => {
        Change(e.target.value)
    }}/>
    </div>
  )
}

export default Color
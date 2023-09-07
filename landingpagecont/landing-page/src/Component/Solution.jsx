import React from 'react'
import Rectangle from "../Assets/Rectangle.png"
import Tickicon from "../Assets/Tickicon.png"

const Solution = () => {
  return (
    <div className=' flex  flex-row  items-center justify-around py-20 px-20 pt-20 pb-20'>
      <img  className=' h-80 w-[20rem]' src={Rectangle} alt="" />
      <div className=' -mt-10  text-start mb-2'>
        <p className=' text-xs text-orange-700 mb-2'>LOREM IPSUM DOLOR SIT AMET</p>
        <h2 className=' font-extrabold  text-3xl mb-2'>Simple Solutions For <br /> Complex Connections</h2>
        <p className=' text-sm  mb-4'>Lorem ipsum dolor, sit amet
          Saepe provident <br /> pariatur necessitatibus
         aspernatur nobis dolorum <br /> magnam ratione.</p>
          <span className=' flex flex-row justify-center  items-center   gap-5 mb-4 mt-4'>
          <img className=' h-5 w-5' src={Tickicon} alt="" />
          <p className=' font-bold'>High Analysis</p>
          <img className=' h-5 w-5' src={Tickicon} alt="" />
          <p className=' font-bold'>Certified Institute</p>
        </span>
        <button className='  bg-orange-600 text-white pt-2 pb-2 px-2 py-2'>Learn More</button>
        </div>
    </div>
  )
}

export default Solution


import React from 'react'
import Firsts from "../Assets/FirstP.png"
import Seconds from "../Assets/SecondP.png"

const Plan = () => {
  return (
    <div className=' '>
      <div className=' h-80 bg-blue-100 flex flex-col pt-8 items-center'>
      <h1 className=' text-2xl font-semibold '>Without Extra Charge Choose <br /> Your Best Plan</h1>
      <div className=' border border-gray-200 shadow-lg pt-2 pb-2 px-5 py-5 flex flex-row justify-between items-center gap-3 mt-4 rounded-md bg-white '>
        <button className=' border border-gray-200 shadow-lg pt-1 pb-1 px-4 py-4  text-sm rounded-md bg-orange-400 text-pink-200'>
          Monthly
        </button>
        <button className=' border border-gray-200 shadow-lg pt-1 pb-1 px-4 py-4 text-sm rounded-md bg-pink-200 text-orange-400'>
          Yearly
        </button>
      </div>
      <div className=' flex flex-row justify-center items-center  mt-10 gap-5'>
        <img className=' h-80' src={Firsts} alt="" />
        <img className=' h-80' src={Seconds} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Plan

import React from 'react'
import Tablet from "../Assets/Tablets.png"

const HeadContent = () => {
  return (
    <div className=' w-screen  h-[100%] flex flex-row justify-around align-middle items-center'>
        <div className=' w-[20%] h-[90%] bg-transparent flex flex-col  items-start'>
            <div>
            <p className=' text-white text-xs  font-semibold'>
                INSPIRATIONAL TECHNOLOGY
            </p>
            <h2 className=' font-semibold text-white text-start  text-2xl  pb-6'>Runs faster <br /> Costs less and <br /> never break</h2>
        </div>
        <div className=' w-full h-[1px] bg-white'></div>
        <h6 className=' text-white font-medium  text-[16px] text-left pt-6'>
            Lorem ipsum dolor sit amet 
             adipisicing elit. Accusantium omnis 
             sint tempore consequuntur ducimus 
             deleniti iusto laboriosam amet! nihil!
        </h6>
        <div className=' w-full flex flex-row gap-10 pt-6'>
            <button className='w-28 h-6 bg-[#ee8a19] font-medium  text-[1rem]  text-white'>
                Get Started
            </button>
            <button className='w-28 h-6 bg-transparent border  font-medium  text-[1rem]  text-white'>
                Free Trial
                </button>
        </div>
        </div>
    <img className=' w-[40%] h-[80%]' src={Tablet} alt="" />
    </div>
  )
}

export default HeadContent
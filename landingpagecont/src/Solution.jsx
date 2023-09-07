import React from 'react'
import Solutions from "./Assets/Solutions.png"
import icons from "./icon.png"

const Solution = () => {
  return (
    <div className=' w-screen h-30  flex flex-row  row-span-2  justify-around   items-center pt-10'>
        <div className=' '>
            <img className=' pt-10' src={Solutions} alt="" />
        </div>
        <div className=' w-45 text-start pt-1'>
            <p className=' text-orange-600  text-xs pb-4'>LOREM IPSUM DOLOR SIT AME</p>
            <h2 className=' text-3xl  font-extrabold pb-4'>Simple Solution For <br /> Complex Connections</h2>
            <h5 className=' text-sm'>Lorem ipsum dolor sit, amet consectetur
                 adipisicing <br /> elit. Vel dolorem magnam, 
                 atque fugit perspiciatis <br /> laudantium eaque 
                 excepturi nobis veritati voluptatum!</h5>

                 <div className=' flex flex-row  gap-5 mt-5'>
                    <span>
                        <img className=' h-5 w-5' src={icons} alt="" /></span><h6 className=' text-sm'>High analysis</h6>
    
                    <span>
                    <img className=' h-5 w-5' src={icons} alt="" /></span><h6 className=' text-sm'>Certified Institute</h6>
                
                 </div>
                 <button className=' bg-orange-600 mt-6 px-2 py-2 pt-2 pb-2  text-white'>
                    Learn More
                 </button>
        </div>
    </div>
  )
}

export default Solution
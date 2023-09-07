import React from 'react'

const Navigation = () => {
  return (
        <div className=' w-full  h-10  flex flex-row  justify-around  items-center'>
        <h1 className=' font-extrabold  text-xl text-white'>SELLZEE</h1>
        <ul className='flex flex-row gap-5 text-sm text-white font-semibold'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Testimonial</li>
        <li>Priceing</li>
        </ul>
        <button className=' w-36 h-8 bg-[#ee8a19]  rounded-md  font-medium  text-xs  text-white'>Get Started</button>
    </div>
  )
}

export default Navigation
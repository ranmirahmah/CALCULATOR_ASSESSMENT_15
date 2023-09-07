import React from 'react'
import Visiona from "../Assets/Visions.png"

const Vision = () => {
  return (
    <div className=' w-screen flex flex-row justify-center items-center bg-orange-100 pt-10 pb-10 h-100 mt-20 px-10 py-10'>
      <img className=' w-[80%]' src={Visiona} alt="" />
    </div>
  )
}

export default Vision

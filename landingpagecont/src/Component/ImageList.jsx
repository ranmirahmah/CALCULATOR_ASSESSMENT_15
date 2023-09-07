import React from 'react'
import FedEx from "../Assets/FedEx.png"
import Google from "../Assets/google.png"
import Ola from "../Assets/Ola.png"
import Microsoft from "../Assets/Microsoft.png"
import Fed from "../Assets/Fed.png"
import Amazon from "../Assets/Amazon.png"
import Walmart from "../Assets/Walmart.png"


const ImageList = () => {
  return (
    <div className=' w-full h-25  flec flex-row pt-10'>
        <div className=' flex flex-row justify-center items-center gap-20'>
            <img className='border-8 px-1 py-2 pt-2 pb-2' src={FedEx} alt="" />
            <img className='border-8 px-1 py-2 pt-2 pb-2' src={Google} alt="" />
            <img className=' border-8 px-1 py-2 pt-2 pb-2' src={Ola} alt="" />
            <img className=' border-8 px-1 py-2 pt-2 pb-2' src={Microsoft} alt="" />
        </div>
        <div className=' flex flex-row justify-center items-center gap-20 pt-6'>
          <img className=' border-8 px-1 py-2 pt-2 pb-2' src={Amazon} alt="" />
          <img  className=' border-8 px-1 py-2 pt-2 pb-2'src={Fed} alt="" />
          <img  className=' border-8 px-1 py-2 pt-2 pb-2'src={Walmart} alt="" />
        </div>
    </div>
  )
}

export default ImageList
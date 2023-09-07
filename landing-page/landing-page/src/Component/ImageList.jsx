import React from 'react'
import FedEx from "../Assets/FedEx.png"
import Google from "../Assets/google.png"
import Ola from "../Assets/Ola.png"
import Microsoft from "../Assets/Microsoft.png"
import Amazon from "../Assets/amazon.png"
import fed from "../Assets/fed.png"
import walmart from "../Assets/walmart.png"

const ImageList = () => {
  return (
    <div className=' w-full h-40  flex flex-col justify-center items-center pt-20 mb-20 gap-7'>
        <div className=' flex flex-row  justify-between items-center gap-10'>
            <img className=' border border-gray-200  shadow-lg pt-1 pb-1 px-1 py-1' src={FedEx} alt="" />
            <img className=' border border-gray-200 shadow-lg pt-1 pb-1 px-1 py-1' src={Google} alt="" />
            <img className=' border border-gray-200 shadow-lg pt-1 pb-1 px-1 py-1' src={Ola} alt="" />
            <img className=' border border-gray-200 shadow-lg pt-1 pb-1 px-1 py-1' src={Microsoft} alt="" />
        </div>
        <div className=' flex flex-row  justify-between items-center gap-10 mt-3'>
            <img className=' border border-gray-200 shadow-lg pt-1 pb-1 px-1 py-1' src={Amazon} alt="" />
            <img className=' border border-gray-200 shadow-lg pt-1 pb-1 px-1 py-1' src={fed} alt="" />
            <img className=' border border-gray-200 shadow-lg pt-1 pb-1 px-1 py-1' src={walmart} alt="" />
        </div>
    </div>
  )
}

export default ImageList
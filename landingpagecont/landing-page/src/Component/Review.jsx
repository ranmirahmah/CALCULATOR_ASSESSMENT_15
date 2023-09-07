import React from 'react'
import  Reviews from "../Assets/Review.png"

const Review = () => {
  return (
    <div>
      <div>
      <h1 className=' mt-7 text-3xl  font-bold'>User's Review</h1>
      <h6 className=' mt-2 text-xs'>Collaborate over projects with your team and clients optimised <br /> for mobiles and tablets don't let slow </h6>
      </div>
      <div className=' w-screen h-96 flex flex-row justify-around items-center'>
        <div className=' flex flex-col w-96 '>
      <div className=' mb-32 '>
        <h1 className=' text-start text-3xl font-bold'>What People Say About Us</h1>
      </div>
      <div className=' border border-gray-200  shadow-lg pt-3 pb-3 px-3 py-3 justify-start items-start'> 
        <div className=' border border-gray-200  shadow-lg pt-1 pb-1 px-1 mt-0'>
          <h1 className=' text-start'>Davit Millar</h1>
          <h4 className=' text-start'>CEO, PParkivew int, Ltd.</h4>
        </div>
        <p className=' text-xs   italic  text-start'>Lorem  dolorum necessitatibus rem doloribus maiores quia accusantium laboriosam voluptates excepturi, nam sint aspernatur similique veritatis ut provident reprehenderit quo iste reiciendis!</p>
      </div>
      </div>
      <div>
        <img className=' h-80'  src={Reviews} alt="" />

      </div>
    </div>
    </div>
  )
}

export default Review

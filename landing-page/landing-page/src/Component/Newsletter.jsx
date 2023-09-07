import React from 'react'

const Newsletter = () => {
  return (
    <div className='  mt-80 flex flex-row justify-center items-center '>
      <div className=' border border-gray-400 w-[50rem] pt-20 pb-20 bg-pink-100 rounded-lg'>
        <p className=' text-orange-500 text-sm font-bold mb-5'>NEWSLETTER</p>
        <h1 className=' text-2xl font-bold  mb-5'>We Offer Every Month 20% Off <br /> For Our All Subscribers</h1>
        <button className='   border border-gray-200 shadow-lg  w-80 pt-2 pb-2 '>
            <button className=' border border-gray-200 bg-orange-500  pt-1 pb-1  w-32 text-xs '>
                Subscribe
            </button>
        </button>
      </div>
    </div>
  )
}

export default Newsletter

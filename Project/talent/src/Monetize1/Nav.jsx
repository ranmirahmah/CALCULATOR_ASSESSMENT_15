import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai"

const Nav = () => {
  return (
    <div className=' flex justify-center items-center  gap-[28rem]'>
      <div className="w-11 h-11 p-2.5 bg-blue-950 rounded-3xl justify-center items-center gap-2.5 inline-flex">
  <div className="w-8 h-4 relative text-blue-100"> <AiOutlineArrowLeft/>
  </div>
</div>
<div className=' flex justify-between items-center gap-2'>
<div className="w-4 h-4 bg-blue-950 rounded-full" />
<div className="w-4 h-4  bg-slate-400 rounded-full" />
</div>
    </div>
  )
}

export default Nav
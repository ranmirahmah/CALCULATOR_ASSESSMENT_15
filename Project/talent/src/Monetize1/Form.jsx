import React from 'react'



const Form = () => {
    return (
        <div className=' flex flex-col justify-center items-center gap-8'>


            <form className=' flex gap-10 mt-5'>
                <div className=' flex flex-col '>
                     <label className="text-black text-[1.4rem] font-normal">First Name</label>
                    <input type="text" name="" id="" placeholder='First Name' className="w-[16rem] h-16 px-4 py-5 bg-neutral-100 rounded-3xl justify-start items-center gap-2.5 inline-flex" />
                </div>
                <div  className=' flex flex-col '>
                <label className="text-black text-[1.4rem] font-normal">Last Name</label>
                <input type="text" name="" id="" placeholder='Last Name' className="w-[16rem] h-16 px-4 py-5 bg-neutral-100 rounded-3xl justify-start items-center gap-2.5 inline-flex" />
                </div>
            </form>

            <form action=""  className=' flex flex-col'>
                <label className="text-black text-[1.4rem] font-normal">Email Address</label>
                <input type="email" name="" id="" placeholder='Email Address' className="w-[34rem] h-16 px-4 py-5 bg-neutral-100 rounded-3xl justify-start items-center gap-2.5 inline-flex text-stone-300 text-base font-normal"/>
            </form>

            <form className=' flex gap-10 justify-center items-center '>
            <div className='flex flex-col'>
            <label className="text-black text-[1.4rem] font-normal">Create Password</label>
            <input className='w-[16rem] h-16 px-4 py-5 bg-neutral-100 rounded-3xl justify-between items-center gap-2.5 inline-flex text-stone-300 text-base font-bold' placeholder='Password' type="password" name="" id=""  />
            </div>
            <div className='flex flex-col'>
            <label className="text-black text-[1.4rem] font-normal">Confirm Password</label>
            <input className='w-[16rem] h-16 px-4 py-5 bg-neutral-100 rounded-3xl justify-between items-center gap-2.5 inline-flex text-stone-300 text-base font-bold' placeholder='Confirm password' type="password" name="" id="" />
            </div>
            </form>

            <button className="w-[34rem]  h-20 p-2.5 bg-blue-950 rounded-3xl border-r-2  border-b-8 border-lime-500 shadow-md justify-center items-center gap-2.5 inline-flex text-lime-500 text-lg font-medium leading-none">Next</button>

            <div >
  
</div>


        </div>
    )
}

export default Form
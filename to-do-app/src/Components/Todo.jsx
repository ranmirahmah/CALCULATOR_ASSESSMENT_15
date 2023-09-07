import React from 'react'

const Todo = () => {
  return (
    <div className=' outline-dotted px-2 py-2 pt-2 pb-2 mt-5 flex flex-row justify-between items-center '>
       <p>{Todo}</p> 
       <div className=''>
        <button className=' outline-dotted'>
            EDIT
        </button>
        <button className=' mx-2  my-2 outline-dashed'>
            DELETE
        </button>
       </div>
    </div>
  )
}

export default Todo
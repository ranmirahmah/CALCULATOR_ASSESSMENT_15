import React from 'react'

const Form = () => {
  return (
    <form className=' flex  justify-center items-center outline-gray-950 mt-2'>
        <input type="text" placeholder='Enter Todo...'/>
        <br />
        <br />
        <button>Submit</button>
    </form>
  )
}

export default Form
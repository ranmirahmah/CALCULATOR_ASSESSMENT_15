import React from 'react'
import Navigation from './Navigation'
import HeadContent from './HeadContent'

const Header = () => {
  return (
    <div className=' w-screen  h-[60vh]  bg-blue-700'>
        <Navigation/>
        <HeadContent/>
    </div>
  )
}

export default Header
import React from 'react'

const Header = ({ headerTitle }) => {
  return (
    <header className=' text-center h-20 w-screen bg-yellow-500 font-bold text-lg'>
        {headerTitle}
    </header>
  )
}

export default Header
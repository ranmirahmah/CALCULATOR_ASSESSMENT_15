import React from 'react'
import ImageList from './ImageList'
import Solutions from './Solution'
import Award from './Award'
import Vision from "./Vision"
import Review from './Review'
import Plan from "./Plan"
import Newsletter from './Newsletter'

const Main = () => {
  return (
    <div className=' gap-36 h-[500svh]'>
        < ImageList />
        < Solutions />
        <Award/>
        < Vision />
        <Review/>
        <Plan />
        < Newsletter/>
    </div>
  )
}

export default Main
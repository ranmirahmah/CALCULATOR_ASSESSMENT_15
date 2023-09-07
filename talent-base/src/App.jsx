import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './common/layout/Authentication'
import Home from './views/home/Home'
import PageLayout from './common/layout/Page'
import Sample from './common/components/Sample'

const App = () => {
  return (
    <>
    {/* <Routes>
      <Route element={<AuthLayout />}>
      <Route path='/'  />
      <Route path='/'  />

      </Route>
    </Routes> */}

    <Sample/>
    {/* <PageLayout /> */}
     </>

    )
   
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './common/layout/Authentication'
import Home from './views/home/Home'
import PageLayout from './common/layout/Page'

const App = () => {
  return (
    <>
    <Routes>
      <Route element={<AuthLayout />}>
      <Route path='/'  />
      </Route>
    </Routes>
    {/* <PageLayout /> */}
     </>

    )
   
}

export default App

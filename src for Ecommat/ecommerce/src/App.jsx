import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/login'
import ProtectedRoutes from './protected-routes';
import Layout from './common/layout/layout';
import SingleProduct from './pages/single-product/SingleProduct';
import Page from './pages/Product-page/product-page';

const App = () => {

  // check if the session storage contains a token
const checkTheSessionStorageForToken = () => { 
  if (sessionStorage.getItem("token")) {
    return true
  } else {
    return false
  }
}

// return the routes for each page
return (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route element={<Layout />}>
      <Route
        path="/home/dashboard"
        element={
          <ProtectedRoutes isLoggedIn={checkTheSessionStorageForToken()}>
            <Page />
          </ProtectedRoutes>
        }
      />
      <Route
        path="product/:id"
        element={
          <ProtectedRoutes isLoggedIn={checkTheSessionStorageForToken()}>
            <SingleProduct />
          </ProtectedRoutes>
        }
      />
      <Route
        path=":category"
        element={
          <ProtectedRoutes isLoggedIn={checkTheSessionStorageForToken()}>
            <Page />
          </ProtectedRoutes>
        }
      />
    </Route>
    <Route
      path="*"
      element={
        <div className="h-[100svh] flex items-center justify-center font-extrabold">
          404: Page not found
        </div>
      }
    />
  </Routes>
);
}

export default App
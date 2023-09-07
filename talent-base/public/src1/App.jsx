import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./common/layout/Authentication";
import Home from "./views/home/Home";
import PageLayout from "./common/layout/Page";
import Centralview from "./Dashboard/Centralview";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Centralview />}>
          <Route path="/" />
        </Route>
      </Routes>
      {/* <PageLayout /> */}
    </>
  );
};

export default App;

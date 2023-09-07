import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./auth.module.css";
import logo from "../../assets/images/logo.svg";
import Home from "../../views/home/Home";

const AuthLayout = () => {
  return (
    <div className={classes.layoutparent}>
      <div className={classes.bluebg}>
        <img src={logo} alt="" />
        <h1 className={classes.talentbase}>
          <span className={classes.TB}>T</span>al <br /> ent <br />{" "}
          <span className={classes.TB}>B</span>ase
        </h1>
      </div>
      <div>
        <Home />
        {/* < Outlet/> */}
      </div>
    </div>
  );
};

export default AuthLayout;

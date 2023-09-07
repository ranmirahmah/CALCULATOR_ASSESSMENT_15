import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./auth.module.css";
import logo from "../../assets/images/logo.svg";
import Home from "../../views/home/Home";
import SourceTalents from "../components/SourceTalent/SourceTalents";
import Monitize1 from "../components/Monitize1/Monitize1";
import Monitize2 from "../components/Monitize2/Monitize2";

const AuthLayout = () => {
  return (
    <div className={classes.layoutparent}>
      <div className={classes.bluebg}>
        <img src={logo} alt="" />
        <h1 className={classes.talentbase}>
          <span className={classes.TB}>T</span>al <br /> ent <br />
          <span className={classes.TB}>B</span>ase
        </h1>
      </div>
      {/* Other half of the page */}
      <div>
        <SourceTalents />
        {/* <Monitize1 /> */}
        {/* <Monitize2 /> */}
        
      </div>
    </div>
  );
};

export default AuthLayout;

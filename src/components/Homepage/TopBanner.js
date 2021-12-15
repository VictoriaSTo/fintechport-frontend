import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import classes from "./TopBanner.module.css";
import TypedReactHook from '../UI/TypedElement';
import OutlinedButtonEl from '../UI/OutlinedButton';
import ContainedButtonEl from '../UI/ContainedButton';
// import robot from "../../assets/robot.png";

const TopBanner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes["banner__text"]}>
        <TypedReactHook />
        <p>FinTechPort is designed to help high-level talent and teams get support for government affairs, business promotion, and innovation development in Mainland China</p>
        <div className={classes["banner__buttons"]}>
          <ContainedButtonEl component={RouterLink} to="/contacts" action={"Contact Now"} />
          <OutlinedButtonEl component={RouterLink} to="/about-us/fintech-hub-of-sz" action={"Learn More"} />
        </div>
      </div>
    </div>
    /* <img src={robot} alt="Robot" className={classes["banner__image"]}/> */
  )
};

export default TopBanner;
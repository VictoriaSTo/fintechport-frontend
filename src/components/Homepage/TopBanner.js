import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import TypedReactHook from '../UI/TypedElement';
import OutlinedButtonEl from '../UI/OutlinedButton';
import ContainedButtonEl from '../UI/ContainedButton';

const TopBanner = (props) => {
  return (
    <div class ="header u-margin-bottom-medium">
      <div class ="header__text-box">
        <div class ="heading-primary">
          <TypedReactHook />
          <p class ="heading-primary--sub">FinTechPort is a leading platform designed to help high-level talent and teams get support for government affairs, business promotion, and innovation development in Mainland China</p>
        </div>
        <div class ="header__btn-box">
          <ContainedButtonEl component={RouterLink} to="/contacts" action={"Contact Now"} onClick={() => {props.setHeaderValue("six"); props.setSelectedAboutMenuIndex(null)}} />
          <OutlinedButtonEl component={RouterLink} to="/about-us/fintech-hub-of-sz" action={"Learn More"} onClick={() => {props.setHeaderValue("five"); props.setSelectedAboutMenuIndex(0)}} />
        </div>
      </div>
    </div>
  )
};

export default TopBanner;
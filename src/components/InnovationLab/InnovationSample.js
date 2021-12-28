import React from 'react';
import { Link as RouterLink} from "react-router-dom";

import classes from './InnovationSample.module.css';
import ContainedButton from '../UI/ContainedButton';
import OutlinedButton from '../UI/OutlinedButton';

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LinkIcon from '@mui/icons-material/Link';
import ScienceIcon from '@mui/icons-material/Science';
import IosShareIcon from '@mui/icons-material/IosShare';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const InnovationSample = () => {
  return (
    <React.Fragment>
      <article className={classes["call-to-action"]}>
        <div className={classes["call-to-action__text"]}>
          <h1>Ready to get started?</h1>
          <div className={classes["call-to-action__buttons"]}>
            <ContainedButton component={RouterLink} to="/submission-form" action={"Apply"} />
            <OutlinedButton component={RouterLink} to="/contacts" action={"Contact Us"}/>
          </div>
        </div>
      </article>
      <article className={classes["text-section"]}>
        <h2>Fintechport Accelerator Program</h2>
        <p>Fintechport's program is a set of support mechanisms for talents and startups who want to build a successful business by developing an innovative product.</p>
        <p>In working with our clients, we have found that foreign founders and startups have similar needs, obstacles and challenges in building their businesses in China. Therefore, we have developed the three-month program that integrates the necessary procedures in a complete framework. The program will help you segment your market, develop your product, attract the right customers, partner, obtain financing, and get funded in mainland China.</p>
        <p>The program offers fundraising opportunities, government affairs, legal and consulting assistance, marketing support, mentoring, and a co-working space.</p>
        <p>We also understand that different projects need different amounts of support in different areas of their business. That's why we customize each program to the needs of the business.</p>
      </article>
      <article className={classes["process-section"]}>
        <h3>Program Timeline</h3>
        <ul>
          <li>
            <a href='#'><span className={classes["process-icon-box"]}><RocketLaunchIcon className={classes["process-icon"]} sx={{fontSize: "68px", color: "#bbb"}}/></span></a>
            <div className={classes["process-detail"]}>
              <h4>Phase 1</h4>
              <p>Mapping key milestones for product and business development</p>
            </div>
          </li>
          <li>
            <a href='#'><span className={classes["process-icon-box"]}><LinkIcon className={classes["process-icon"]} sx={{fontSize: "68px", color: "#bbb"}}/></span></a>
            <div className={classes["process-detail"]}>
              <h4>Phase 2</h4>
              <p>Product development support, including design, prototyping, and manufacturing</p>
            </div>
          </li>
          <li>
            <a href='#'><span className={classes["process-icon-box"]}><ScienceIcon className={classes["process-icon"]} sx={{fontSize: "68px", color: "#bbb"}}/></span></a>
            <div className={classes["process-detail"]}>
              <h4>Phase 3</h4>
              <p>Creating a unified brand identity and developing marketing channels</p>
            </div>
          </li>
          <li>
            <a href='#'><span className={classes["process-icon-box"]}><IosShareIcon className={classes["process-icon"]} sx={{fontSize: "68px", color: "#bbb"}}/></span></a>
            <div className={classes["process-detail"]}>
              <h4>Phase 4</h4>
              <p>Using our network of tech investors to help finance teams</p>
            </div>
          </li>
          <li>
            <a href='#'><span className={classes["process-icon-box"]}><MonetizationOnIcon className={classes["process-icon"]} sx={{fontSize: "68px", color: "#bbb"}}/></span></a>
            <div className={classes["process-detail"]}>
              <h4>Phase 5</h4>
              <p>Legal assistance, go-to-market guidance, and continuous network support</p>
            </div>
          </li>
        </ul>
      </article>
    </React.Fragment>
  )
};

export default InnovationSample;
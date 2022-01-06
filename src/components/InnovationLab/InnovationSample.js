import React from 'react';
import { Link as RouterLink} from "react-router-dom";

import classes from './InnovationSample.module.css';
import ContainedButton from '../UI/ContainedButton';
import OutlinedButton from '../UI/OutlinedButton';
import processInfo from './processInfo';

const InnovationSample = (props) => {
  return (
    <>
      <article className={classes["call-to-action"]}>
        <div className={classes["call-to-action__text"]}>
          <h1>Ready to get started?</h1>
          <div className={classes["call-to-action__buttons"]}>
            <ContainedButton component={RouterLink} to="/submission-form" action={"Apply"} onClick={() => {props.setHeaderValue("three"); props.setSelectedAboutMenuIndex(null)}} />
            <OutlinedButton component={RouterLink} to="/contacts" action={"Contact Us"} onClick={() => {props.setHeaderValue("six"); props.setSelectedAboutMenuIndex(null)}} />
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
          {processInfo.map(process => {
            const {id, phase, description } = process;
            return (
              <li key={id}>
                <a href="javascript:void(0)"><span className={classes["process-icon-box"]}><process.icon className={classes["process-icon"]} sx={{fontSize: "68px", color: "#bbb"}}/></span></a>
                <div className={classes["process-detail"]}>
                  <h4>{phase}</h4>
                  <p>{description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </article>
    </>
  )
};

export default InnovationSample;
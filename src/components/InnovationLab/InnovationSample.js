import React from 'react';
import { Link as RouterLink} from "react-router-dom";
import ContainedButton from '../UI/ContainedButton';
import OutlinedButton from '../UI/OutlinedButton';
import processInfo from './processInfo';

const InnovationSample = (props) => {
  return (
    <main>
      <article class="section-banner u-margin-bottom-medium">
        <div class="banner">
          <div class="banner__text-box">
            <h1 class="heading-primary heading-primary--main">Ready to get <br /> started?</h1>
            <div class="banner__buttons">
              <ContainedButton component={RouterLink} to="/submission-form" action={"Apply"} onClick={() => {props.setHeaderValue("three"); props.setSelectedAboutMenuIndex(null)}} />
              <OutlinedButton component={RouterLink} to="/contacts" action={"Contact Us"} onClick={() => {props.setHeaderValue("six"); props.setSelectedAboutMenuIndex(null)}} />
            </div>
          </div>
        </div>
      </article>
      <article class="section-text u-margin-bottom-medium">
          <div class="u-center-text u-margin-bottom-medium">
            <h2 class="heading-secondary">Fintechport Accelerator Program</h2>
          </div>
          <div class="u-justify-text">
            <p>Fintechport's program is a set of support mechanisms for talents and startups who want to build a successful business by developing an innovative product.</p>
            <p>In working with our clients, we have found that foreign founders and startups have similar needs, obstacles and challenges in building their businesses in China. Therefore, we have developed the three-month program that integrates the necessary procedures in a complete framework. The program will help you segment your market, develop your product, attract the right customers, partner, obtain financing, and get funded in mainland China.</p>
            <p>The program offers fundraising opportunities, government affairs, legal and consulting assistance, marketing support, mentoring, and a co-working space.</p>
            <p>We also understand that different projects need different amounts of support in different areas of their business. That's why we customize each program to the needs of the business.</p>
          </div>
      </article>
      <article class="section-process">
        <div class="u-center-text u-margin-bottom-big">
          <h3 class="heading-tertiary u-margin-bottom-medium">Program Timeline</h3>
          <ul class="process-list">
            {processInfo.map(process => {
              const {id, phase, description } = process;
              return (
                <li class="process" key={id}>
                  <a href="javascript:void(0)"><span class="process__icon"><process.icon class="process__icon-image" sx={{fontSize: "68px", color: "grey"}}/></span></a>
                  <div class="process__text u-margin-top-small">
                    <h4 class="u-margin-bottom-small">{phase}</h4>
                    <p>{description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </article>
    </main>
  )
};

export default InnovationSample;
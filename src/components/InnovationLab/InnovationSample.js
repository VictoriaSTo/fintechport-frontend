import React from 'react';
import { Link as RouterLink} from "react-router-dom";

import WrapperNoColor from '../UI/WrapperNoColor';
import Wrapper from '../UI/Wrapper';
import classes from './InnovationSample.module.css';
import ContainedButton from '../UI/ContainedButton';
import OutlinedButton from '../UI/OutlinedButton';

const InnovationSample = () => {
  return (
    <React.Fragment>

        {/* <article className={classes.header}>
          <img src={schema} alt="schema" className={classes["header__image"]}/>
          <div className={classes["header__text"]}>
            <h1>Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta sadipscing te.</h1>
            <div className={classes["header__underline"]}></div>
            <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. </p>
          </div>
        </article> */}
         <div className={classes["lab-header"]}>
        <div className={classes["lab-header__text-box"]}>
          <div className={classes["heading-primary"]}>
            <h1>Programs</h1>
          </div>
        </div>
      </div>
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
              <a href='#'><span className={classes["process-icon"]}></span></a>
              <div className={classes["process-detail"]}>
                <h4>Phase 1</h4>
                <p>Adjust product and market fit through rapid iteration</p>
              </div>
            </li>
            <li>
              <a href='#'><span className={classes["process-icon"]}></span></a>
              <div className={classes["process-detail"]}>
                <h4>Phase 2</h4>
                <p>Adjust product and market fit through rapid iteration</p>
              </div>
            </li>
            <li>
              <a href='#'><span className={classes["process-icon"]}></span></a>
              <div className={classes["process-detail"]}>
                <h4>Phase 3</h4>
                <p>Adjust product and market fit through rapid iteration</p>
              </div>
            </li>
            <li>
              <a href='#'><span className={classes["process-icon"]}></span></a>
              <div className={classes["process-detail"]}>
                <h4>Phase 4</h4>
                <p>Adjust product and market fit through rapid iteration</p>
              </div>
            </li>
            <li>
              <a href='#'><span className={classes["process-icon"]}></span></a>
              <div className={classes["process-detail"]}>
                <h4>Phase 5</h4>
                <p>Adjust product and market fit through rapid iteration</p>
              </div>
            </li>
          </ul>
        </article>
      <Wrapper>
        <article className={classes["call-to-action"]}>
          <div>
            <h2>Ready to get started?</h2>
            <p>Apply or contact us directly</p>
          </div>
          <div className={classes["call-to-action__buttons"]}>
            <ContainedButton component={RouterLink} to="/submission-form" action={"Apply"} />
            <OutlinedButton component={RouterLink} to="/contacts" action={"Contact Us"}/>
          </div>
        </article>
      </Wrapper>
    </React.Fragment>
  )
};

export default InnovationSample;
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
            <h1>Innovation Lab</h1>
          </div>
        </div>
      </div>
        <article className={classes["text-section"]}>
          <p> 
            We don’t believe in forcing someone into a specific job function so consider the following responsibilities - in order of importance - as a starting point:
            <br/>
            You manage and grow key client accounts
            <br/>
            Strategic sparring partner: by asking the right question and sharing a clear point of view clients consider you as a go-to-sparring partner
            Account management: you build on the great work we do and continuously look for other opportunities to help our clients.
            You lead key complex client projects
            <br/>
            Program preparation and design: You turn a brief into a detailed approach that is both flexible enough to survive the fuzzy front end of innovation while being robust enough to drive real impact (no theatre please).
          </p>
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
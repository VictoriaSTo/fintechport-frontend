import React from 'react';

import classes from './PositionDescription.module.css';
import ContainedButtonEl from '../UI/ContainedButton';

const PositionDescription = () => {
  return (
    <React.Fragment>
      <div className={classes["position__title"]}>
        <h3>Executive assistant</h3>
        <p>Shenzhen, China - part-time</p>
        <div className={classes["position__divider"]}></div>
        <h4>Overview</h4>
      </div>
      <div className={classes["position__description"]}>
        <h4>About this role</h4>
        <p>We don’t believe in forcing someone into a specific job function so consider the following responsibilities - in order of importance - as a starting point:</p>
        <p><b>You manage and grow key client accounts</b></p>
        <p>Strategic sparring partner: by asking the right question and sharing a clear point of view clients consider you as a go-to-sparring partner
        Account management: you build on the great work we do and continuously look for other opportunities to help our clients.</p>
        <p><b>You lead key complex client projects</b></p>
        <p>Program preparation and design: You turn a brief into a detailed approach that is both flexible enough to survive the fuzzy front end of innovation while being robust enough to drive real impact (no theatre please)
        Workshop design and facilitation: You design and facilitate workshops with diverse and senior stakeholders
        Coaching team members: You ensure everyone on the project team is working towards a common goal and is set up to do their best work</p>
        <div className={classes["position__actions"]}>
          <ContainedButtonEl action={"Apply"} />
        </div>
      </div>
    </React.Fragment>
  )
};

export default PositionDescription;

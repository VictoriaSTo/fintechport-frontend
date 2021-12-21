import React from 'react';
import classes from './FintechportHub.module.css';

const FintechportHub = () => {
  return (
    <React.Fragment>
      <div className={classes["header"]}>
        <div className={classes["header__text-box"]}>
          <div className={classes["heading-primary"]}>
            <h1>FinTech Hub of QianHai, Shenzhen</h1>
          </div>
        </div>
      </div>
      <div className={classes["text"]}>
        <h2 className={classes["text-title"]}>About Fintechport</h2>
        <p>The Fintechport, China's leading talent&startup development platform. It is located in QianHai, Shenzhen - the hub for digital technology in China. The Fintechport focuses on helping talents and technological startups from around the world enter China. We offer comprehensive services and resources from our mentors, partners and investors. With a team of committed professionals, the Fintechport is a "bridge" between innovations, entrepreneurship and venture capital investment. The robust and supportive network continues beyond the projects.</p>
      </div>
    </React.Fragment>
  )
};

export default FintechportHub;
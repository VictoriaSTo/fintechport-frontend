import React from 'react';
import classes from './FintechportHub.module.css';
import Grid from '@mui/material/Grid';

import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import PeopleIcon from '@mui/icons-material/People';

const FintechportHub = () => {
  return (
    <React.Fragment>
      <div className={classes["header"]}>
        <div className={classes["header__text-box"]}>
          <div className={classes["heading-primary"]}>
            <h1>Tech Hub of QianHai, Shenzhen</h1>
          </div>
        </div>
      </div>
      <div className={classes["text"]}>
        <h2 className={classes["text-title"]}>About Fintechport</h2>
        <p>Fintechport, China's leading talent&startup development platform. It is located in QianHai, Shenzhen - the hub for digital technology in China. Fintechport focuses on helping talents and technological startups from around the world enter China. We offer comprehensive services and resources from our mentors, partners and investors. With a team of committed professionals, Fintechport is a "bridge" between innovations, entrepreneurship and venture capital investment. The robust and supportive network is our essential advantage.</p>
        <h3 className={classes["text-subtitle"]}>Our Objectives</h3>
        <p>To cultivate innovative solutions, promote entrepreneurs and attract global talent, partners and companies to China for cooperation and commercial possibilities.</p>
        <h3 className={classes["text-subtitle"]}>Welcome to Fintechport</h3>
        <p>We invest and empower talents and startups who are solving some of the world's most critical problems with innovative technology-based solutions.</p>
        </div>
        <div className={classes["section-advantages"]}>
          <h2 className={classes["text-title"]}>Why Join Fintechport?</h2>
          <Grid 
          container 
          columnSpacing={{ xs: 1, sm: 4, md: 6 }}
          rowSpacing={{ xs: 1, sm: 2, md: 2 }}
          sx={{
            textAlign: "center", 
            paddingTop: "5%",
            paddingBottom: "5%"
            }}>
            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={6} 
              sx={{
                marginBottom: "4rem"
              }}
            >
              <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                <div className={classes["advantage-box"]}>
                    <WorkIcon className={classes["adv__icon"]}/>
                  <div className={classes["adv__text-container"]}>
                    <h3 className={classes["adv__title"]}>Services</h3>
                    <p className={classes["adv__text"]}>We provide a wide range of services and customize then to your startup needs.</p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={6} 
              sx={{
                marginBottom: "4rem"
              }}
            >
              <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                <div className={classes["advantage-box"]}>
                    <CreditScoreIcon className={classes["adv__icon"]}/>
                  <div className={classes["adv__text-container"]}>
                    <h3 className={classes["adv__title"]}>Investment</h3>
                    <p className={classes["adv__text"]}>We provide investment capital to help launch your startup.</p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={6} 
              sx={{
                marginBottom: "4rem"
              }}
            >
              <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                <div className={classes["advantage-box"]}>
                    <SchoolIcon className={classes["adv__icon"]}/>
                  <div className={classes["adv__text-container"]}>
                    <h3 className={classes["adv__title"]}>Mentorship</h3>
                    <p className={classes["adv__text"]}>Our mentors give vital insights to entrepreneurs both during and after the program, eventually saving them time and money.</p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={6} 
              sx={{
                marginBottom: "4rem"
              }}
            >
              <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                <div className={classes["advantage-box"]}>
                    <CardGiftcardIcon className={classes["adv__icon"]}/>
                  <div className={classes["adv__text-container"]}>
                    <h3 className={classes["adv__title"]}>Perks</h3>
                    <p className={classes["adv__text"]}>Our partners offer exclusive deals on their tools & services.</p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={6} 
              sx={{
                marginBottom: "4rem"
              }}
            >
              <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                <div className={classes["advantage-box"]}>
                    <WorkspacesIcon className={classes["adv__icon"]}/>
                  <div className={classes["adv__text-container"]}>
                    <h3 className={classes["adv__title"]}>Space</h3>
                    <p className={classes["adv__text"]}>We provide co-working space at fast-growing tech area in Futian.</p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={6} 
              sx={{
                marginBottom: "4rem"
              }}
            >
              <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                <div className={classes["advantage-box"]}>
                    <PeopleIcon className={classes["adv__icon"]}/>
                  <div className={classes["adv__text-container"]}>
                    <h3 className={classes["adv__title"]}>Network & Community</h3>
                    <p className={classes["adv__text"]}>We connect you with our global network of investors & partners all of whom can offer valuable advice and collaboration.</p>
                  </div>
                </div>
              </div>
            </Grid>

        </Grid>
        </div>
    </React.Fragment>
  )
};

export default FintechportHub;
import React from 'react';
import Wrapper from '../UI/Wrapper';
import { Grid } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import theme from '../UI/Theme';

import classes from './ApplicationBanner.module.css';

const ApplicationBanner = () => {
  return (
    <Wrapper>
      <Grid 
        container 
        spacing={2}
      >
        <Grid container item direction="row" xs={12} md={6} 
        sx={{
          marginTop: "5%", 
          marginBottom: "5%",
          [theme.breakpoints.down("md")]: {
            textAlign: "center"
          }
          }}
        >
          <Grid item xs={12} md={12} sx={{marginBottom: "5%"}}>
            <h1 className={classes["banner__title"]}>Get access to partnerships, projects and resources which will help your idea to grow.</h1>
          </Grid>
          <Grid container item spacing={6}>
            <Grid item md={6}>
              <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                <DoneIcon color="secondary" sx={{fontSize: "2.5rem"}} />
                <p className={classes["banner__text--aligned"]}>We accept and evaluate applications on a rolling basis. Our team will review an application within 1 week of submission and reach out to you.</p>
              </div>
            </Grid>
            <Grid item md={6}>
              <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                <DoneAllIcon color="secondary" sx={{fontSize: "2.5rem"}} />
                <p className={classes["banner__text--aligned"]}>Be ready to provide an initial amount of information that helps us understand your team, technology and market during our initial interview.</p>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} 
          sx={{
            marginTop: "15%",
            [theme.breakpoints.down("md")]: {
              marginTop: "0",
              marginBottom: "10%"
            }
          }}
        >
          <div className={classes["banner__text--large"]} data-aos-duration="1000" data-aos="fade-left" data-aos-once="true">APPLY TODAY &<br/> INNOVATE</div>
        </Grid>
      </Grid>
    </Wrapper>
  )
};

export default ApplicationBanner;

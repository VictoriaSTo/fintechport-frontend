import React from 'react';

// Material ui
import { Grid } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import theme from '../UI/Theme';

// Project files
import classes from './ApplicationBanner.module.css';
import solution from '../../assets/solution.png';

const ApplicationBanner = () => {
  return (
    <div className={classes['header']}>
      <Grid container spacing={6}>
        <Grid container item direction="row" xs={12} md={6} className={classes['header-left']}
          sx={{
            marginTop: "5%", 
            marginBottom: "5%",
            [theme.breakpoints.down("md")]: {
              textAlign: "center"
            }
          }}
        >
          <Grid item xs={12} md={12} sx={{marginBottom: "5%"}}>
            <h1 className={classes["header__title"]}>Get access to partnerships, projects and resources which will help your idea to grow.</h1>
          </Grid>
          <Grid item container spacing={6}>
            <Grid item md={6}>
              <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                <DoneIcon color="secondary" sx={{fontSize: "2.5rem"}} />
                <p className={classes["header__text--aligned"]}>We accept and evaluate applications on a rolling basis. Our team will review an application within 1 week of submission and reach out to you.</p>
              </div>
            </Grid>

            <Grid item md={6}>
              <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                <DoneAllIcon color="secondary" sx={{fontSize: "2.5rem"}} />
                <p className={classes["header__text--aligned"]}>Be ready to provide an initial amount of information that helps us understand your team, technology and market during our initial interview.</p>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={6} className={classes['header-right']}
          sx={{
            marginTop: "5%",
            [theme.breakpoints.down("md")]: {
              marginTop: "0",
              marginBottom: "10%"
            }
          }}
        >
          <Grid md={12} item 
          sx={{
            textAlign: "center",
            [theme.breakpoints.down("md")]: {
              marginBottom: "10%"
            }
            }}><img src={solution} alt='solution' style={{maxHeight: "220px"}}/></Grid>
          <Grid md={12}><div className={classes["header__text--large"]} data-aos-duration="1000" data-aos="fade-left" data-aos-once="true">APPLY TODAY &<br/> INNOVATE</div></Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default ApplicationBanner;

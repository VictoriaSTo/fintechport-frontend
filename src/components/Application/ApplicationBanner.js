import React from 'react';
import Wrapper from '../UI/Wrapper';
import { Grid } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
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
            <h1 className={classes["banner__title"]}>Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta sadipscing te.</h1>
          </Grid>
          <Grid container item spacing={6}>
            <Grid item md={6}>
              <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                <BusinessIcon color="secondary" sx={{fontSize: "2.5rem"}} />
                <p className={classes["banner__text--aligned"]}>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
              </div>
            </Grid>
            <Grid item md={6}>
              <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                <BusinessIcon color="secondary" sx={{fontSize: "2.5rem"}} />
                <p className={classes["banner__text--aligned"]}>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
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
          <div className={classes["banner__text--large"]} data-aos-duration="1000" data-aos="fade-left" data-aos-once="true">FORTUNE <br/> 500</div>
        </Grid>
      </Grid>
    </Wrapper>
  )
};

export default ApplicationBanner;

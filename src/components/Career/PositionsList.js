import React from "react";
import { Link as RouterLink} from "react-router-dom";
import { Grid } from "@mui/material";

import classes from "./PositionList.module.css";
import Wrapper from "../UI/Wrapper";
import tech from "../../assets/tech.jpeg";
import OutlinedButtonEl from "../UI/OutlinedButton";


const PositionsList = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <div className={classes.banner}>
          <img src={tech} alt="tech jobs" className={classes["banner__photo"]} data-aos-duration="1000" data-aos="fade-right" data-aos-once="true" />
          <div className={classes["banner__card"]} data-aos-duration="1000" data-aos="fade-left" data-aos-once="true">
            <h1>Jobs</h1>
            <p>Board of Innovation is building a team with superpowers. How are we doing it? By hiring top talent and creating a unique work environment.</p>
            <OutlinedButtonEl action={"Learn More"} />
          </div>
        </div>
      </Wrapper>
      <div className={classes["jobs"]}>
        <Grid 
          container 
          spacing={2}>
          <Grid item xs={12} md={6}>
            <h3>Startegy & Business Design</h3>
          </Grid>
          <Grid item xs={12} md={6}>  
            <Grid container columnSpacing={6} rowSpacing={0}>
              <Grid component={RouterLink} to="/open-positions/:id" item xs={12} md={12} sx={{textDecoration: "none"}} className={classes.job}>
                <p className={classes["job__title"]}>Executive Assistant</p>
                <p className={classes["job__details"]}>Shenzhen - part-time</p>
              </Grid>
              <Grid component={RouterLink} to="/open-positions/:id" item xs={12} md={12} sx={{textDecoration: "none"}} className={classes.job}>
                <p className={classes["job__title"]}>Executive Assistant</p>
                <p className={classes["job__details"]}>Shenzhen - part-time</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{paddingTop: "4%"}}>
          <Grid item xs={12} md={6}>
            <h3>Marketing & B2B</h3>
          </Grid>
          <Grid item xs={12} md={6}>  
            <Grid container columnSpacing={6} rowSpacing={4}>
              <Grid component={RouterLink} to="/open-positions/:id" item xs={12} md={12} sx={{textDecoration: "none"}} className={classes.job}>
                <p className={classes["job__title"]}>Executive Assistant</p>
                <p className={classes["job__details"]}>Shenzhen - part-time</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className={classes["contact-us"]} data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
        <h3>Become a part of our talent pool</h3>
        <p>Did you not find the job you were looking for but are still keen to join Board of Innovation? We’d love to have you as part of our talent pool in the different regions!</p>
        <p>Contact us at<br/><span style={{color: "#03d9d6", fontWeight: "600"}}>hr@fintechport.com</span></p>
      </div>
    </React.Fragment>
  )
};

export default PositionsList;
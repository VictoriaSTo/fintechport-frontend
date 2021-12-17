import React from "react";
import { Link as RouterLink} from "react-router-dom";
import { Grid } from "@mui/material";

import classes from "./PositionList.module.css";
import Wrapper from "../UI/Wrapper";
import tech from "../../assets/tech.jpeg";
import OutlinedButtonEl from "../UI/OutlinedButton";
import useFetch from '../../hooks/useFetch';


const PositionsList = () => {
  const apiUrl = 'http://localhost:1337';
  const { loading, error, data } = useFetch(`${apiUrl}/jobs`);

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error</p>

  return (
    <React.Fragment>
      <Wrapper>
        <div className={classes.banner}>
          <img src={tech} alt="tech jobs" className={classes["banner__photo"]} data-aos-duration="1000" data-aos="fade-right" data-aos-once="true" />
          <div className={classes["banner__card"]} data-aos-duration="1000" data-aos="fade-left" data-aos-once="true">
            <h1>Jobs</h1>
            <p>Board of Innovation is building a team with superpowers. How are we doing it? By hiring top talent and creating a unique work environment.</p>
          </div>
        </div>
      </Wrapper>


      <div className={classes["jobs"]}>
        {data.map((job) => {
              const { id, title, schedule, category} = job;
            return (
              <Grid container spacing={2} key={id} sx={{alignItems: "center"}}>
                <Grid item xs={12} md={6}>
                  <h3>{category}</h3>
                </Grid>
                <Grid item xs={12} md={6}>  
                  <Grid container columnSpacing={6} rowSpacing={0}>
                    <Grid component={RouterLink} to={`/open-positions/${id}`} item xs={12} md={12} sx={{textDecoration: "none"}} className={classes.job}>
                      <p className={classes["job__title"]}>{title}</p>
                      <p className={classes["job__details"]}>{schedule}</p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )
        })}
      </div>

      <div className={classes["contact-us"]} data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
        <h3>Become a part of our talent pool</h3>
        <p>Did you not find the job you were looking for but are still keen to join Board of Innovation? We’d love to have you as part of our talent pool in the different regions!</p>
        <p>Contact us at<br/><a href="mailto:hr@fintechport.com?subject=Job Application&body=Thank you for applying for the position at Fintechport. Please attach your resume and a cover letter. We will carefully review your application and get back to you soon." style={{color: "#03d9d6", fontWeight: "600", textDecoration: "none"}}>hr@fintechport.com</a></p>
      </div>
    </React.Fragment>
  )
};

export default PositionsList;
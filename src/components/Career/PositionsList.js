import React from "react";
import { Link as RouterLink} from "react-router-dom";

// Material ui
import { Grid } from "@mui/material";

// Project files
import classes from "./PositionList.module.css";
import useFetch from '../../hooks/useFetch';
import LoadingSpinner from '../UI/LoadingSpinner';
import ServerError from '../../pages/HelperPages/ServerError';


const PositionsList = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data } = useFetch(`${apiUrl}/jobs`);

  if (loading) return <LoadingSpinner />
  if (error) return <ServerError />

  return (
    <React.Fragment>
      <div className={classes["jobs-banner"]}>
        <h1>Be a part of us</h1>
      </div>
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
        <h4>Become a part of our team</h4>
        <p>Did you not find the job you were looking for but are still keen to join the Fintechport? We’d love to hear from you!</p>
        <p>Contact us at<br/><a href="mailto:hr@fintechport.com?subject=Job Application&body=Thank you for applying for the position at Fintechport. Please attach your resume and a cover letter. We will carefully review your application and get back to you soon." style={{color: "#03d9d6", fontWeight: "600", textDecoration: "none"}}>hr@fintechport.com</a></p>
      </div>
    </React.Fragment>
  )
};

export default PositionsList;
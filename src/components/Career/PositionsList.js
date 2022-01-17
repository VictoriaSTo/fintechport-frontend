import React from "react";
import { Link as RouterLink} from "react-router-dom";

// Material ui
import { Grid } from "@mui/material";

// Project files
import useFetch from '../../hooks/useFetch';
import ServerResponseStatus from '../../pages/HelperPages/ServerResponseStatus';


const PositionsList = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data } = useFetch(`${apiUrl}/jobs`);

  if (loading || error) return <ServerResponseStatus loading={loading} error={error} />

  return (
    <main>
      <div class="section-jobs-banner">
        <div class="banner">
          <div class="banner__text-box">
            <h1 class="heading-primary heading-primary--main">Be a part of us</h1>
          </div>
        </div>
      </div>
      <div class="section-jobs">
        {data.map((job) => {
              const { id, title, schedule, category} = job;
            return (
              <Grid container spacing={2} key={id} sx={{alignItems: "center"}}>
                <Grid item xs={6} md={6}>
                  <h3 class="heading-tertiary u-margin-bottom-medium" >{category}</h3>
                </Grid>
                <Grid item xs={6} md={6}>  
                  <Grid component={RouterLink} to={`/open-positions/${id}`} item xs={12} md={12} sx={{textDecoration: "none"}} class="job">
                    <p class="job__title u-margin-top-medium">{title}</p>
                    <p class="job__details u-margin-bottom-medium">{schedule}</p>
                  </Grid>
                </Grid>
              </Grid>
            )
        })}
      </div>

      <div class="section-contact-us u-margin-bottom-medium" data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
        <h4 class="u-margin-bottom-small">Become a part of our team</h4>
        <p>Did you not find the job you were looking for but are still keen to join the Fintechport? We’d love to hear from you!</p>
        <p>Contact us at <a href="mailto:hr@fintechport.com?subject=Job Application&body=Thank you for applying for the position at Fintechport. Please attach your resume and a cover letter. We will carefully review your application and get back to you soon." style={{color: "#03d9d6", fontWeight: "600", textDecoration: "none"}}>hr@fintechport.com</a></p>
      </div>
    </main>
  )
};

export default PositionsList;
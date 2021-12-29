import React from 'react';
import classes from './PartnersList.module.css';
import { Grid } from '@mui/material';
import useFetch from '../../hooks/useFetch';
import LoadingSpinner from '../UI/LoadingSpinner';
import ServerError from '../../pages/HelperPages/ServerError';


const PartnersList = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data } = useFetch(`${apiUrl}/partners`);


  if (loading) return <LoadingSpinner />
  if (error) return <ServerError />

  return (
    <div className={classes.partners}>
      <div className={classes["partners__title"]}>
        <h1>BUSINESS PARTNERS</h1>
        <div className={classes["partners__underline"]} />
      </div>
        <div className={classes["partners-gallery"]}>
          <div className={classes["partners-gallery-category"]}>
            <h3>Business Partners</h3>
            <Grid item md={12} container spacing={2} sx={{marginTop: "2%", marginBottom: "4%"}}>
              {data.map((partner) => {
                if (partner.category === "business") {
                  return (
                    <Grid item xs={12} md={2.4} 
                      sx={{
                        textAlign: "center",
                        marginBottom: "4%"
                        }}>
                      <img data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" src={partner.logo[0].url} alt={partner.name} className={classes.logo}/>
                    </Grid>
                  )
                } 
              })}
            </Grid>
            <div className={classes["partners__divider"]} />
          </div>
          <div className={classes["partners-gallery-category"]}>
            <h3>Alliance Partners</h3>
            <p>The Fintechport has partnered with several alliance partners to ensure entrepreneurs have access to the professional tools they need.</p>
            <Grid item md={12} container spacing={2} sx={{marginTop: "2%", marginBottom: "4%"}}>
              {data.map((partner) => {
                if (partner.category === "alliance partners") {
                  return (
                    <Grid item xs={12} md={2.4} 
                      sx={{
                        textAlign: "center",
                        marginBottom: "4%"
                        }}>
                       <img data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" src={partner.logo[0].url} alt={partner.name} className={classes.logo}/>
                    </Grid>
                  )
                } 
              })}
            </Grid>
            <div className={classes["partners__divider"]} />
          </div>
          <div className={classes["partners-gallery-category"]}>
            <h3>Affiliation Partners</h3>
            <p>As part of our mission to connect talent to the future, the Fintechport works with leading universities to engage top talent in new projects and help them build relationships with relevant employers or support their own projects.</p>
            <Grid item md={12} container spacing={2} sx={{marginTop: "2%", marginBottom: "4%"}}>
              {data.map((partner) => {
                if (partner.category === "university collaboration") {
                  return (
                    <Grid item xs={12} md={2.4} 
                      sx={{
                        textAlign: "center",
                        marginBottom: "4%"
                        }}>
                       <img data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" src={partner.logo[0].url} alt={partner.name} className={classes.logo}/>
                    </Grid>
                  )
                } 
              })}
            </Grid>
          </div>
      </div>
    </div>
  )
};

export default PartnersList;

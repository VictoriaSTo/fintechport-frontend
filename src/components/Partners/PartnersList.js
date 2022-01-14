import React from 'react';
import { Grid } from '@mui/material';
import useFetch from '../../hooks/useFetch';
import ServerResponseStatus from '../../pages/HelperPages/ServerResponseStatus';


const PartnersList = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data } = useFetch(`${apiUrl}/partners`);

  if (loading || error) return <ServerResponseStatus loading={loading} error={error} />

  return (
    <div class="section-partners">
      <h1 class="heading-secondary u-margin-bottom-medium">BUSINESS PARTNERS</h1>
      <div class="u-justify-text">
        <h3 class="heading-tertiary u-margin-bottom-medium">Business Partners</h3>
        <Grid item md={12} container spacing={2} sx={{marginTop: "2%", marginBottom: "4%"}}>
          {data.map((partner) => {
            if (partner.category === "business") {
              return (
                <Grid item xs={12} md={2.4} 
                  sx={{
                    textAlign: "center",
                    marginBottom: "4%"
                    }}>
                  <img data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" src={partner.logo[0].url} alt={partner.name} class="logo" />
                </Grid>
              )
            } 
          })}
        </Grid>
        <div class="divider" />
      </div>
      <h3 class="heading-tertiary u-margin-bottom-small">Alliance Partners</h3>
      <p class="u-margin-bottom-medium">The Fintechport has partnered with several alliance partners to ensure entrepreneurs have access to the professional tools they need.</p>
      <Grid item md={12} container spacing={2} sx={{marginTop: "2%", marginBottom: "4%"}}>
        {data.map((partner) => {
          if (partner.category === "alliance partners") {
            return (
              <Grid item xs={12} md={2.4} 
                sx={{
                  textAlign: "center",
                  marginBottom: "4%"
                  }}>
                  <img data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" src={partner.logo[0].url} alt={partner.name} class="logo" />
              </Grid>
            )
          } 
        })}
      </Grid>
      <div class="divider" />
      <h3 class="heading-tertiary u-margin-bottom-small">Affiliation Partners</h3>
      <p class="u-margin-bottom-medium">As part of our mission to connect talent to the future, the Fintechport works with leading universities to engage top talent in new projects and help them build relationships with relevant employers or support their own projects.</p>
      <Grid item md={12} container spacing={2} sx={{marginTop: "2%", marginBottom: "4%"}}>
        {data.map((partner) => {
          if (partner.category === "university collaboration") {
            return (
              <Grid item xs={12} md={2.4} 
                sx={{
                  textAlign: "center",
                  marginBottom: "4%"
                  }}>
                  <img data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" src={partner.logo[0].url} alt={partner.name} class="logo" />
              </Grid>
            )
          } 
        })}
      </Grid>
    </div>
  )
};

export default PartnersList;

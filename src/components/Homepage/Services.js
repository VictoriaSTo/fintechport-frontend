import React from 'react';
import Grid from '@mui/material/Grid';
import AOS from 'aos';
import 'aos/dist/aos.css';

import services from './servicesInfo'; 

const servicesList = services.map((service) => {
  const { id, title, desc, icon, details} = service;
  return (
      <Grid item xs={12} md={6} lg={4} key={id} sx={{
          marginBottom: "4rem"
        }}
      >
        <div data-aos-duration="1000" data-aos="fade-up">
          <div class="service-box">
            <div class="service-box__icon">{icon}</div>
            <h3 class="service-box__title">{title}</h3>
            <p class="service-box__text">{desc}</p>
            <p class="service-box__comments">{details}</p>
          </div>
        </div>
      </Grid>
  )
})

const Services = () => {
  return (
      <div class="section-services">
        <div class="u-center-text">
          <h2 class="heading-secondary u-margin-bottom-small" 
            // data-aos-duration="2000" 
            // data-aos="fade-up"
          >
            We offer a complete <br/> range of services
          </h2>
          <Grid 
            container 
            columnSpacing={{ xs: 1, sm: 4, md: 12 }}
            rowSpacing={{ xs: 1, sm: 4, md: 4 }}
            sx={{
              textAlign: "center", 
              paddingTop: "5%",
              paddingBottom: "5%"
              }}>
            {servicesList}
          </Grid>
        </div>
      </div>
  )
};

AOS.init();

export default Services;

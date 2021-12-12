import React from 'react';
import Grid from '@mui/material/Grid';

import classes from './Services.module.css';
import Wrapper from '../UI/Wrapper';
import services from './servicesInfo';

import AOS from 'aos';
import 'aos/dist/aos.css'; 


const servicesList = services.map((service) => {
  const { id, title, desc, icon} = service;
  return (
      <Grid 
        item 
        xs={12} 
        md={6} 
        lg={4} 
        key={id}
        sx={{
          marginBottom: "4rem",
        }}
      >
        <div data-aos-duration="1000" data-aos="fade-up">
          {/* <div className={classes["service__card"]}> */}
            <div>{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        {/* </div> */}
      </Grid>
  )
})

const Services = () => {
  return (
    <Wrapper>
      <h2 
        className={classes["services__title"]} 
        // data-aos-duration="2000" 
        // data-aos="fade-up"
      >
        We offer a complete <br/> range of services
      </h2>
      <Grid 
        container 
        columnSpacing={{ xs: 1, sm: 4, md: 12 }}
        sx={{
          textAlign: "center", 
          paddingTop: "5%",
          paddingBottom: "5%"
          }}>
        {servicesList}
      </Grid>
    </Wrapper>
  )
};

AOS.init();

export default Services;

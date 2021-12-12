import React from 'react';
import classes from './PartnersList.module.css';
import { Grid } from '@mui/material';

import Wrapper from '../UI/WrapperNoColor';
import partnersInfo from '../Homepage/partnersInfo';


const PartnersList = () => {
  return (
    <Wrapper>
      <div className={classes.partners}>
      <div className={classes["partners__title"]}>
        <h2>BUSINESS PARTNERS</h2>
        <div className={classes["partners__underline"]} />
      </div>
        <div className={classes["partners-gallery"]}>
          <div className={classes["partners-gallery-category"]}>
            <h3>Business Partners</h3>
            <p>These are healthcare companies that are not equity owners. They provide “underwriting” or “sponsorship” financial support for the cost of operating the Lab. These companies will have various benefits based on the level of financial support they provide to the Innovation Lab.</p>
            <Grid item md={12} container spacing={2} sx={{marginTop: "2%", marginBottom: "4%"}}>
              {partnersInfo.map((partner) => {
                if (partner.category === "business") {
                  return (
                    <Grid item xs={12} md={2} 
                      sx={{
                        textAlign: "center",
                        marginBottom: "4%"
                        }}>
                      <img data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" src={partner.logo} alt={partner.name} className={classes.logo}/>
                    </Grid>
                  )
                } 
              })}
            </Grid>
            <div className={classes["partners__divider"]} />
          </div>
          <div className={classes["partners-gallery-category"]}>
            <h3>Alliance Partners</h3>
            <p>These are healthcare companies that are not equity owners. They provide “underwriting” or “sponsorship” financial support for the cost of operating the Lab. These companies will have various benefits based on the level of financial support they provide to the Innovation Lab.</p>
            <Grid item md={12} container spacing={2} sx={{marginTop: "2%", marginBottom: "4%"}}>
              {partnersInfo.map((partner) => {
                if (partner.category === "alliance partners") {
                  return (
                    <Grid item xs={12} md={2} 
                      sx={{
                        textAlign: "center",
                        marginBottom: "4%"
                        }}>
                      <img data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" src={partner.logo} alt={partner.name} className={classes.logo}/>
                    </Grid>
                  )
                } 
              })}
            </Grid>
            <div className={classes["partners__divider"]} />
          </div>
          <div className={classes["partners-gallery-category"]}>
            <h3>Affiliation Partners</h3>
            <Grid item md={12} container spacing={2} sx={{marginTop: "2%", marginBottom: "4%"}}>
              {partnersInfo.map((partner) => {
                if (partner.category === "university collaboration") {
                  return (
                    <Grid item xs={12} md={2} 
                      sx={{
                        textAlign: "center",
                        marginBottom: "4%"
                        }}>
                      <img data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" src={partner.logo} alt={partner.name} className={classes.logo}/>
                    </Grid>
                  )
                } 
              })}
            </Grid>
          </div>
        </div>
      </div>
    </Wrapper>
  )
};

export default PartnersList;

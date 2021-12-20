import React from "react";

import { Grid } from "@mui/material";

import Wrapper from "../components/UI/WrapperNoColor";
import ContactForm from "../components/Contacts/ContactForm";
import classes from "./Contacts.module.css";

const Contacts = () => {
  return (
    <React.Fragment>
      <div className={classes["contacts-banner"]}></div>
      <Wrapper>
        <h2>Contact Information</h2>
        <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <h3>How To Find Us</h3>
              <p>
                706A, Tower A, QianHai Excellence Times Square, <br/> 15 HaiTian Road, Boa'An District, <br/> Shenzhen, China 
              </p>
              <p><b>Phone number:</b></p>
              <p>+86 134 XXXX XXXX Name</p>
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
          </Grid>
        </div>
      </Wrapper>
    </React.Fragment>
  )
};

export default Contacts;

// We are always curious and open for a chat or new collaborations. Give us a call on +46 8 441 32 80 or send us an email.
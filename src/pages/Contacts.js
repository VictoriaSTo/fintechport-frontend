import React from "react";

import { Grid } from "@mui/material";

import Wrapper from "../components/UI/WrapperNoColor";
import ContactForm from "../components/Contacts/ContactForm";

const Contacts = () => {
  return (
    <Wrapper>
      <h2>Contact Information</h2>
      <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <h3>How To Find Us</h3>
            <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum.</p>
            <p><b>Et has minim elitr intellegat.</b></p>
            <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum.</p>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </div>
    </Wrapper>
  )
};

export default Contacts;
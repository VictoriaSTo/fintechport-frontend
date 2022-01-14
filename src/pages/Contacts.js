import React from "react";
import { Grid } from "@mui/material";
import ContactForm from "../components/Contacts/ContactForm";

const Contacts = () => {
  return (
    <main>
      <div class="contacts__banner"></div>
      <div class="section-contacts">
        <h2 class="heading-secondary u-margin-bottom-medium ">Contact Information</h2>
        <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <h3 class="heading-tertiary u-margin-bottom-small">How To Find Us</h3>
              <p class="u-margin-bottom-small" >
                706A, Tower A, QianHai Excellence Times Square, <br/> 15 HaiTian Road, Boa'An District, <br/> Shenzhen, China 
              </p>
              <p><b>Phone number:</b></p>
              <p>+86 185 6568 4709 Ludovic</p>
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
          </Grid>
        </div>
      </div>
    </main>
  )
};

export default Contacts;

// We are always curious and open for a chat or new collaborations. Give us a call on +46 8 441 32 80 or send us an email.
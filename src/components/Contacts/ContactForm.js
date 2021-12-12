import React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import theme from "../UI/Theme";

import ContainedButtonEl from '../UI/ContainedButton';

const InputTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: theme.palette.common.lightBlue,
  },
  "&:hover label": {
    color: theme.palette.common.lightBlue
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.common.lightBlue,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.common.lightBlue,
    },
  }
});

// const ContainedButton = styled(Button)({
//   ...theme.typography.buttonCustomization,
//   color: "white",
//   boxShadow: "none",
//   width: "28%",
//   marginTop: "5%",
//   [theme.breakpoints.down("md")]: {
//     width: "100%",
//     marginRight: "0px",
//     marginBottom: "16px"
//   }
// })

const ContactForm = () => {
  return (
    <div data-aos-duration="1000" data-aos="fade-left" data-aos-once="true">
      <h3>Get In Touch</h3>
      <Grid container columnSpacing={6} rowSpacing={4} sx={{marginBottom: "5%"}}>
        <Grid item xs={12} md={6}>
          <InputTextField required fullWidth id="Name" label="Name" variant="filled" size="small"/>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputTextField required fullWidth id="Email" label="Email" variant="filled" size="small"/>
        </Grid>
        <Grid item xs={12} md={12}>
          <InputTextField
            required 
            fullWidth 
            id="Message"
            label="Message"
            multiline
            variant="filled"
            rows={4}
          />
        </Grid>
      </Grid>
      <ContainedButtonEl action={"Send"} />
    </div>
  )
};

export default ContactForm;
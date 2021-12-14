import React, { useState }  from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import theme from "../UI/Theme";

import ContainedButtonEl from '../UI/ContainedButton';

// Parses the JSON returned by a network request
const parseJSON = resp => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = resp => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  return parseJSON(resp).then(resp => {
    throw resp;
  });
};
const headers = {
  'Content-Type': 'application/json',
};

// Style customization
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

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState(null);
  const [enteredEmail, setEnteredEmail] = useState(null);
  const [enteredMessage, setEnteredMessage] = useState(null);

  const submitFormHandler = async e => {
    e.preventDefault();
    console.log(enteredMessage, enteredName, enteredEmail)
    try {
      await fetch('http://localhost:1337/contact-uses', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          message: enteredMessage
        }),
      })
        .then(checkStatus)
        .then(parseJSON);
    } catch (error) {
      console.log(error)
    }

    setEnteredName("");
    setEnteredEmail("");
    setEnteredMessage("");
  }

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }
  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  }


  return (
    <div data-aos-duration="1000" data-aos="fade-left" data-aos-once="true">
      <h3>Get In Touch</h3>
      <form onSubmit={submitFormHandler}>
        <Grid container columnSpacing={6} rowSpacing={4} sx={{marginBottom: "5%"}}>
          <Grid item xs={12} md={6}>
          <InputTextField required fullWidth id="Name" label="Name" variant="filled" size="small" value={enteredName} onChange={nameChangeHandler}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <InputTextField required fullWidth id="Email" label="Email" variant="filled" size="small" value={enteredEmail} onChange={emailChangeHandler}/>
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
                onChange={messageChangeHandler}
                value={enteredMessage}
              />
            </Grid>
        </Grid>
        <ContainedButtonEl type={"submit"} action={"Send"} />
      </form>

    </div>
  )
};

export default ContactForm;
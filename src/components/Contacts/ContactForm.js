import React, { useState }  from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import theme from "../UI/Theme";

import ContainedButtonEl from '../UI/ContainedButton';
import useInput from '../../hooks/useInput';

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

// Validation options
const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
const isNotMinimum = (value) => value.trim().length >= 30;

// Style customization
const InputTextField = styled(TextField)({
  '& .MuiFormHelperText-root': {
    fontFamily: "Barlow",
    fontSize: "1.4rem",
  },
  '& .MuiInputLabel-root': {
      fontFamily: "Barlow",
      fontSize: "1.8rem"
  },
  '& .MuiFilledInput-input': {
    fontSize: "1.8rem",
    color: "black"
  },
  '& label.Mui-focused': {
    color: theme.palette.common.lightBlue,
  }
});

const ContactForm = () => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotMinimum);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const submitHandler = async e => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    try {
      await fetch('http://localhost:1337/contact-uses', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          message: messageValue
        }),
      })
        .then(checkStatus)
        .then(parseJSON);
    } catch (error) {
      console.log(error)
    }

    resetName();
    resetEmail();
    resetMessage();
  }

  return (
    <div data-aos-duration="1000" data-aos="fade-left" data-aos-once="true">
      <h3>Get In Touch</h3>
      <form onSubmit={submitHandler}>
        <Grid container columnSpacing={6} rowSpacing={4} sx={{marginBottom: "5%"}}>
          <Grid item xs={12} md={6}>
          <InputTextField required fullWidth id="Name" label="Name" variant="filled" size="small" value={nameValue} onChange={nameChangeHandler} onBlur={nameBlurHandler} error={nameHasError} helperText={nameHasError ? "Please enter your name" : ""}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <InputTextField required fullWidth id="Email" label="Email" variant="filled" size="small" value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler}  error={emailHasError}helperText={emailHasError ? "Please enter a valid email address" : ""}/>
            </Grid>
            <Grid item xs={12} md={12}>
              <InputTextField
                required 
                fullWidth 
                error={messageHasError}
                helperText={messageHasError ? "Message must be thirty or more characters" : ""}
                id="Message"
                label="Message"
                multiline
                variant="filled"
                rows={4}
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
                value={messageValue}
              />
            </Grid>
        </Grid>
        <ContainedButtonEl type={"submit"} action={"Send"} />
      </form>
    </div>
  )
};

export default ContactForm;
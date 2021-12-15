import React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import theme from "../UI/Theme";

import ContainedButtonEl from '../UI/ContainedButton';
import classes from './ApplicationForm.module.css';
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
const isEmail = (value) => value.includes('@');


const ApplicationForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
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
    value: phoneNumberValue,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumber,
  } = useInput(isNotEmpty);
  const {
    value: jobTitleValue,
    isValid: jobTitleIsValid,
    hasError: jobTitleHasError,
    valueChangeHandler: jobTitleChangeHandler,
    inputBlurHandler: jobTitleBlurHandler,
    reset: resetJobTitle,
  } = useInput(isNotEmpty);
  const {
    value: organizationValue,
    isValid: organizationIsValid,
    hasError: organizationHasError,
    valueChangeHandler: organizationChangeHandler,
    inputBlurHandler: organizationBlurHandler,
    reset: resetOrganization,
  } = useInput(isNotEmpty);
  const {
    value: countryValue,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: resetCountry,
  } = useInput(isNotEmpty);
  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid && phoneNumberIsValid && jobTitleIsValid && organizationIsValid && countryIsValid && messageIsValid) {
    formIsValid = true;
  }

  const submitHandler = async event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Validated!');
    console.log(firstNameValue, lastNameValue, emailValue, phoneNumberValue, jobTitleValue, organizationValue, countryValue, messageValue);

    try {
      await fetch('http://localhost:1337/applications', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          first_name: firstNameValue,
          last_name: lastNameValue,
          job_title: jobTitleValue,
          email: emailValue,
          phone_number: phoneNumberValue,
          organization: organizationValue,
          country: countryValue,
          message: messageValue
        }),
      })
        .then(checkStatus)
        .then(parseJSON);
    } catch (error) {
      console.log(error)
    }

    resetFirstName();
    resetLastName();
    resetEmail();
    resetPhoneNumber();
    resetJobTitle();
    resetOrganization();
    resetCountry();
    resetMessage();
  };

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

  return (
    <div className={classes.form}>
      <h2>Get In Touch</h2>
      <form onSubmit={submitHandler}>
        <Grid container columnSpacing={6} rowSpacing={4}>
          <Grid item xs={12} md={6}>
            <TextField 
              error={firstNameHasError}
              helperText={firstNameHasError ? "Please enter your name" : ""}
              required 
              fullWidth 
              id="First Name"
              label="First Name" 
              value={firstNameValue} 
              onChange={firstNameChangeHandler} 
              onBlur={firstNameBlurHandler} 
              variant="filled" 
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              error={lastNameHasError}
              helperText={lastNameHasError ? "Please enter your surname" : ""}
              required 
              fullWidth 
              id="Last Name"
              label="Last Name" 
              value={lastNameValue} 
              onChange={lastNameChangeHandler} 
              onBlur={lastNameBlurHandler} 
              variant="filled" 
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              error={emailHasError}
              helperText={emailHasError ? "Please enter a valid email address" : ""}
              required 
              fullWidth 
              id="Email"
              label="Email" 
              value={emailValue} 
              onChange={emailChangeHandler} 
              onBlur={emailBlurHandler} 
              variant="filled" 
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              error={phoneNumberHasError}
              helperText={phoneNumberHasError ? "Please enter a valid phone number" : ""}
              required 
              fullWidth 
              id="Phone Number"
              label="Phone Number" 
              value={phoneNumberValue} 
              onChange={phoneNumberChangeHandler} 
              onBlur={phoneNumberBlurHandler} 
              variant="filled" 
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              error={jobTitleHasError}
              helperText={jobTitleHasError ? "Please enter your job title" : ""}
              required 
              fullWidth 
              id="Job Title"
              label="Job Title" 
              value={jobTitleValue} 
              onChange={jobTitleChangeHandler} 
              onBlur={jobTitleBlurHandler} 
              variant="filled" 
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              fullWidth 
              id="Organization"
              label="Organization" 
              value={organizationValue} 
              onChange={organizationChangeHandler} 
              onBlur={organizationBlurHandler} 
              variant="filled" 
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              error={countryHasError}
              helperText={countryHasError ? "Please enter your country" : ""}
              required 
              fullWidth 
              id="Country"
              label="Country" 
              value={countryValue} 
              onChange={countryChangeHandler} 
              onBlur={countryBlurHandler} 
              variant="filled" 
              size="small"
            />
          </Grid>
            {/* {applicationFields} */}
          <Grid item xs={12} md={12}>
            <TextField
              error={messageHasError}
              helperText={messageHasError ? "Message must be thirty or more characters" : ""}
              required 
              fullWidth 
              id="filled-textarea"
              label="How do you see the Fintechport Lab helping you?"
              multiline
              variant="filled"
              rows={4}
              value={messageValue}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              sx={{marginBottom: "5%"}}
            />
          </Grid>
        </Grid>
        <ContainedButtonEl type={"submit"} action={"Submit"} />
      </form>
    </div>
  )
};

export default ApplicationForm;

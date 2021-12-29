import React from 'react';

// Material ui
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import theme from "../UI/Theme";

// Project files
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
const isEmail = (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
const isPhoneNumber = (value) => /^((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/.test(value)
const isNotMinimum = (value) => value.trim().length >= 30;
const isWebsite = (value) => value.includes(".");

// Form
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
  } = useInput(isPhoneNumber);
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
  } = useInput(isNotMinimum);
  const {
    value: websiteValue,
    isValid: websiteIsValid,
    hasError: websiteHasError,
    valueChangeHandler: websiteChangeHandler,
    inputBlurHandler: websiteBlurHandler,
    reset: resetWebsite,
  } = useInput(isWebsite);

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
      await fetch(`${process.env.REACT_APP_API_URL}/applications`, {
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
    resetWebsite();
  };

  return (
    <div className={classes.form}>
      <h2>Apply to the Fintechport</h2>
      <p>We'd love to help you get started with the Fintechport! Please fill out and submit the form below</p>
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
              sx={[
                {'& .MuiFormHelperText-root': {
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
                }}
              ]}
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
              sx={[
                {'& .MuiFormHelperText-root': {
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
                }}
              ]}
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
              sx={[
                {'& .MuiFormHelperText-root': {
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
                }}
              ]}
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
              sx={[
                {'& .MuiFormHelperText-root': {
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
                }}
              ]}
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
              sx={[
                {'& .MuiFormHelperText-root': {
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
                }}
              ]}
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
              sx={[
                {'& .MuiFormHelperText-root': {
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
                }}
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              fullWidth 
              id="Organization"
              label="Company Name" 
              value={organizationValue} 
              onChange={organizationChangeHandler} 
              onBlur={organizationBlurHandler} 
              variant="filled" 
              size="small"
              sx={[
                {'& .MuiFormHelperText-root': {
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
                }}
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth 
              id="Website"
              label="Company Website" 
              value={websiteValue} 
              onChange={websiteChangeHandler} 
              onBlur={websiteBlurHandler} 
              variant="filled" 
              size="small"
              sx={[
                {'& .MuiFormHelperText-root': {
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
                }}
              ]}
            />
          </Grid>
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
              sx={[
                {'& .MuiFormHelperText-root': {
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
                }},
                {marginBottom: "5%"}
              ]}
            />
          </Grid>
        </Grid>
        <ContainedButtonEl type={"submit"} action={"Submit"} />
      </form>
    </div>
  )
};

export default ApplicationForm;

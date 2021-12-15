import React from "react";
import { Link as RouterLink} from "react-router-dom";

import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import OutlinedButtonEl from '../UI/OutlinedButton';
import TextFieldEl from '../UI/TextField';
import useInput from '../../hooks/useInput';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
const isEmail = (value) => value.includes('@');

// Style customization
const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.darkBrown,
    width: "100%",
    height: "12rem",
    zIndex: 1,
    position: "relative",
    paddingTop: "4%",
    paddingBottom: "8%",
    [theme.breakpoints.down("md")]: {
    height: "52rem"
    }
  },
  mainContainer: {
    position: "absolute",
    justifyContent: "left",
    paddingLeft: "6%"
  },
  link: {
    color: theme.palette.common.white,
    fontWeight: 300,
    fontSize: "1.6rem",
    textDecoration: "none",

    "&:hover": {
      color: theme.palette.common.lightBlue,
      transitionDelay: "0.3s"
    }
  },
  text: {
    color: theme.palette.common.white,
    fontWeight: 300,
    fontSize: "1.6rem",
    textDecoration: "none"
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: 600,
    fontSize: "1.6rem",
    textDecoration: "none"
  },
  icon: {
    "&:hover": {
      color: theme.palette.common.lightBlue,
      fontSize: "1.6rem",
      transitionDelay: "0.3s"
    }
  }
}))

const Footer = (props) => {
  const classes = useStyles();

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const submitHandler = async e => {
    e.preventDefault();

    if (!emailIsValid) {
      return;
    }

    try {
      await fetch('http://localhost:1337/subscriptions', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          email: emailValue
        }),
      })
        .then(checkStatus)
        .then(parseJSON);
    } catch (error) {
      console.log(error)
    }
    resetEmail();
  }

  return (
    <footer className={classes.footer}>
      <Grid 
        container spacing={2} className={classes.mainContainer}>
        <Grid xs={10} md={4} item sx={{marginTop: "24px"}}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.title}>
              FINTECHPORT LTD.
            </Grid>
            <Grid item className={classes.text} sx={{width: "50%"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </Grid>
            <Grid spacing={2} container sx={{paddingTop: "12px", paddingLeft: "16px"}}>
              <Grid item>
                <Link target="_blank" href="http://www.linkedin.com" >
                  <LinkedInIcon 
                    color="primary" 
                    className={classes.icon}      
                    sx={{ 
                    height: "2.4rem", 
                    width: "auto" }} 
                  ></LinkedInIcon>
                </Link>
              </Grid>
              <Grid item>
                <Link target="_blank" href="http://www.facebook.com">
                  <FacebookIcon color="primary" 
                    className={classes.icon}      
                    sx={{ 
                    height: "2.4rem", 
                    width: "auto" }} />
                </Link>
              </Grid>
              <Grid item>
                <Link target="_blank" href="http://www.twitter.com">
                  <TwitterIcon color="primary" 
                    className={classes.icon}      
                    sx={{ 
                    height: "2.4rem", 
                    width: "auto" }} />
                </Link>
              </Grid>
              <Grid item>
                <Link target="_blank" href="http://www.youtube.com">
                  <YouTubeIcon color="primary" 
                    className={classes.icon}      
                    sx={{ 
                    height: "2.4rem", 
                    width: "auto" }} />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={5} md={2} item sx={{marginTop: "24px"}}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.title}>
              ACCOUNT
            </Grid>
            <Grid component={RouterLink} onClick={() => {props.setHeaderValue("null"); props.setSelectedAboutMenuIndex("null")}} to="/signup" item className={classes.link}>
              Sign Up
            </Grid>
            <Grid component={RouterLink} onClick={() => {props.setHeaderValue("null"); props.setSelectedAboutMenuIndex("null")}} to="/login" item className={classes.link}>
              Log In
            </Grid>
            {/* <Grid item component={RouterLink} to="/" className={classes.link}>
              Chat With Us
            </Grid> */}
          </Grid>
        </Grid>
        <Grid xs={5} md={2} item sx={{marginTop: "24px"}}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.title}>
              LEARN MORE
            </Grid>
            <Grid item >
              <Link className={classes.link} target="_blank" href="https://www.wmegt.com/" style={{textDecoration: "none"}}>
                Esport (WMEGT)
              </Link>
            </Grid>
            <Grid item component={RouterLink} onClick={() => {props.setHeaderValue("null"); props.setSelectedAboutMenuIndex("null")}} to="/privacy-policy" className={classes.link}>
              Privacy Policy
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={10} md={4} item sx={{marginTop: "24px"}}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.title} sx={{width: "110%"}}>
              Subscribe to stay updated!
            </Grid>
            <Grid item className={classes.link}>
              <form onSubmit={submitHandler}>
                <TextFieldEl 
                  label={"Email"}               
                  value={emailValue} 
                  onChange={emailChangeHandler} 
                  onBlur={emailBlurHandler} />
                <OutlinedButtonEl type={"submit"} action={"Subscribe"} />
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
};

export default Footer;
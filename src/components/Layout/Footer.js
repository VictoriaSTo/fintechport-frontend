import React, { useState } from "react";
import { Link as RouterLink} from "react-router-dom";

import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import theme from "../UI/Theme";

import OutlinedButtonEl from '../UI/OutlinedButton';
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
const isEmail = (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)


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

const CustomizedTextField = styled(TextField)({
  '& .MuiInputLabel-root': {
    fontFamily: "Barlow",
    fontSize: "1.6rem",
    color: "white"
  },
  '& .MuiOutlinedInput-input': {
    fontSize: "1.8rem",
    color: "white"
  },
  '& label': {
    color: 'white'
  },
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
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: "4%",
    '& .MuiOutlinedInput-root': {
      width: "100%"
    }
  }
});

const Footer = (props) => {
  const [emailSent, setEmailSent] = useState(false);
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
      await fetch(`${process.env.REACT_APP_API_URL}/subscriptions`, {
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
    setEmailSent(true);
  }

  return (
    <footer className={classes.footer}>
      <Grid 
        container spacing={2} justifyContent="space-between" className={classes.mainContainer}>
        <Grid xs={10} md={4} item sx={{marginTop: "24px"}}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.title}>
              FINTECHPORT LTD.
            </Grid>
            <Grid item className={classes.text} sx={{width: "50%"}}>
              Leading talent & startup development platform
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
        {/* <Grid xs={5} md={2} item sx={{marginTop: "24px"}}>
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
            <Grid item component={RouterLink} to="/" className={classes.link}>
              Chat With Us
            </Grid>
          </Grid>
        </Grid> */}
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
              Subscribe to stay updated
            </Grid>
            <Grid item className={classes.link}>
              {emailSent && (<p className={classes.text}>Thank you for joining our mailing list!</p>)}
              {!emailSent && (<form onSubmit={submitHandler}>
                <CustomizedTextField 
                  label={"Email"}  
                  id="email-outlined"             
                  value={emailValue} 
                  onChange={emailChangeHandler} 
                  onBlur={emailBlurHandler}
                  size="small" 
                  sx={{
                    display: "block",
                    marginBottom: "2%"
                  }}/>
                <OutlinedButtonEl type={"submit"} action={"Subscribe"} />
              </form>)}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
};

export default Footer;

import React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import theme from "../UI/Theme";

import ContainedButtonEl from '../UI/ContainedButton';
import classes from './ApplicationForm.module.css';
import applicationFieldsInfo from './applicationFieldsInfo';

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

const applicationFields = applicationFieldsInfo.map((field) => {
  return (
    <Grid item xs={12} md={6}>
      <InputTextField required fullWidth id={field.id} label={field.label} variant="filled" size="small"/>
    </Grid>
  )
})

const ApplicationForm = () => {
  return (
    <div className={classes.form}>
      <h2>Get In Touch</h2>
      <Grid container columnSpacing={6} rowSpacing={4}>
        {applicationFields}
        <Grid item xs={12} md={12}>
          <InputTextField
            required 
            fullWidth 
            id="filled-textarea"
            label="How do you see the Fintechport Lab helping you?"
            multiline
            variant="filled"
            rows={4}
            sx={{marginBottom: "5%"}}
          />
        </Grid>
      </Grid>
      <ContainedButtonEl action={"Submit"} />
    </div>
  )
};

export default ApplicationForm;
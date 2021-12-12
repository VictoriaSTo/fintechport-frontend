import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import theme from "../../components/UI/Theme";
import { Link as RouterLink} from "react-router-dom";

import classes from './Login.module.css';
import ContainedButtonEl from '../../components/UI/ContainedButton';

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


const Login = () => {
return (
  <div className={classes["main-container"]}>
    <form className={classes.form}>
      <div class="container">
        <h1 style={{marginBottom: "28px"}}>Log in to Fintechport</h1>
        <InputTextField sx={{marginBottom: "12px"}} required fullWidth id="name" label="Enter Username" variant="filled" size="small" />
        <InputTextField sx={{marginBottom: "12px"}} required fullWidth id="password" label="Enter Password" variant="filled" size="small"/>
        <ContainedButtonEl action={"Log In"} />
      </div>
      <div class="container">
        <p style={{marginBottom: "0px", paddingBottom: "4px"}}>Or Sign Up using</p>
        <p style={{marginTop: "0px"}}><RouterLink component={RouterLink} to="/signup" className={classes.link} href="#">Sign Up</RouterLink></p>
        <p>Forgot <a className={classes.link} href="#">Password?</a></p>
      </div>
    </form>
  </div>
)
};

export default Login;
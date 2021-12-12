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

const Signup = () => {
return (
  <div className={classes["main-container"]}>
    <form className={classes.form}>
      <div class="container">
        <h1 style={{marginBottom: "28px"}}>Sign up to Fintechport</h1>
        <InputTextField sx={{marginBottom: "12px"}} required fullWidth id="email" label="Email address" variant="filled" size="small" />
        <InputTextField sx={{marginBottom: "12px"}} required fullWidth id="password" label="Password" variant="filled" size="small"/>
        <InputTextField sx={{marginBottom: "12px"}} required fullWidth id="repeat-password" label="Repeat Password" variant="filled" size="small"/>
        <ContainedButtonEl action={"Sign Up"} />
      </div>
      <div class="container">
        <p style={{marginBottom: "0px", paddingBottom: "4px"}}>Already have an account?</p>
        <p style={{marginTop: "0px"}}><RouterLink className={classes.link} href="#" component={RouterLink} to="/login" >Login</RouterLink></p>
      </div>
    </form>
  </div>
)
};

export default Signup;
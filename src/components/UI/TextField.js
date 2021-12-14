import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import theme from "./Theme";

const CustomizedTextField = styled(TextField)({
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
    width: "100%"
  }
});

const TextFieldEl = (props) => {
  return (              
    <CustomizedTextField
      label={props.label}
      id="outlined-size-small"
      defaultValue=" "
      size="small"
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default TextFieldEl;
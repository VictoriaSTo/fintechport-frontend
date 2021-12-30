import theme from './Theme';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const OutlinedButton = styled(Button)({
  ...theme.typography.buttonCustomization,
  fontSize: "1.4rem",
  minWidth: "6.4rem",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  }
})

const OutlinedButtonEl = (props) => {
  return (
    <OutlinedButton 
      variant="outlined" 
      color="secondary"
      type={props.type}
      component={props.component}
      to={props.to}
      onClick={props.onClick}
    >
      {props.action}
    </OutlinedButton>
  )
};

export default OutlinedButtonEl;
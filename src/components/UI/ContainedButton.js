import theme from './Theme';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ContainedButton = styled(Button)({
  ...theme.typography.buttonCustomization,
  color: "white",
  boxShadow: "none",
  fontSize: "1.4rem",
  minWidth: "6.4rem",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginRight: "0px",
    marginBottom: "16px"
  }
})


const ContainedButtonEl = (props) => {
  return (
    <ContainedButton 
      variant="contained" 
      color="secondary" 
      sx={{marginRight: "24px"}}
    >
      {props.action}
    </ContainedButton>
  )
};

export default ContainedButtonEl;
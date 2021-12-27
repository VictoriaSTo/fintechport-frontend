import { Grid } from "@mui/material";
import theme from '../UI/Theme';
import { Link as RouterLink} from "react-router-dom";

import classes from "./Partners.module.css";
import useFetch from '../../hooks/useFetch';
import LoadingSpinner from '../UI/LoadingSpinner';
import OutlinedButtonEl from "../UI/OutlinedButton";

const Partners = () => {
  const apiUrl = 'http://localhost:1337';
  const { loading, error, data } = useFetch('http://localhost:1337/partners');

  if (loading) return <LoadingSpinner />
  if (error) return <p>Error</p>

  const partnersList = data.map((partner) => {
    const { id, name, logo } = partner;
    
    return (
      <Grid item xs={6} md={2.2} key={id}>
         <img data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" src={`${apiUrl}${logo[0].url}`} alt={name} className={classes.logo}/>
      </Grid> 
    )
  })

  return (
  <div className={classes["section-partners"]}>
    <div className={classes["heading-box"]}>
      <h2 className={classes["heading-secondary"]}>We Partner With</h2>
    </div>
    <Grid item container spacing={6}    
      sx={{
      paddingLeft: "84px",
      textAlign: "center",
      paddingTop: "2%",
      paddingBottom: "6%",
      [theme.breakpoints.down("md")]: {
        paddingLeft: "7%",
        paddingRight: "7%",
      }}}
    >
      {partnersList}
    </Grid>
    <OutlinedButtonEl component={RouterLink} action="Learn More" to="/about-us/partners"/>
  </div>
  )
};

export default Partners;
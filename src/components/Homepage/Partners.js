import { Grid } from "@mui/material";
import theme from '../UI/Theme';
import { Link as RouterLink} from "react-router-dom";

import classes from "./Partners.module.css";
// import partnersInfo from "./partnersInfo";
import useFetch from '../../hooks/useFetch';

const Partners = () => {
  const apiUrl = 'http://localhost:1337';
  const { loading, error, data } = useFetch('http://localhost:1337/partners');

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error</p>

  const partnersList = data.map((partner) => {
    const { id, name, logo } = partner;
    
    return (
      <Grid item xs={4} md={2.2} key={id}>
         <img data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" src={`${apiUrl}${logo[0].url}`} alt={name} className={classes.logo}/>
      </Grid> 
    )
  })

  return (
  <div className={classes["logo-container"]}>

        <div className={classes["partners-text"]}>
          <h2>Collaboration with <br/> forward-thinking organizations</h2>
          <RouterLink to="/about-us/partners" style={{textDecoration: "none"}}><p data-aos-duration="1000" data-aos="fade-bottom" data-aos-mirror="true" data-aos-delay="700" className={classes["title-reference"]}>Learn more about our partnership &rarr;</p></RouterLink>
        </div>
    
      <Grid item md={12} container spacing={6}    
        sx={{
        paddingLeft: "84px",
        textAlign: "center",
        paddingTop: "5%",
        [theme.breakpoints.down("md")]: {
          paddingLeft: "7%",
          paddingRight: "7%",
        }
        }}
      >
        {partnersList}
      </Grid>

  </div>
  )
};

export default Partners;
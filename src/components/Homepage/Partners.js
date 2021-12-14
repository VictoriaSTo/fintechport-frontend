import { Grid } from "@mui/material";
import theme from '../UI/Theme';
import { Link as RouterLink} from "react-router-dom";

import classes from "./Partners.module.css";
// import partnersInfo from "./partnersInfo";
import useFetch from '../../hooks/useFetch';

const Partners = () => {
  const { loading, error, data } = useFetch('http://localhost:1337/partners');

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error</p>

  const partnersList = data.map((partner) => {
    const { id, name, logo } = partner;
    const apiUrl = 'http://localhost:1337';
    
    return (
      <Grid item xs={4} md={3} key={id}>
         <img data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" src={`${apiUrl}${logo[0].url}`} alt={name} className={classes.logo}/>
      </Grid> 
    )
  })

  return (
  <div className={classes["logo-container"]}>
    <Grid item container>
      <Grid item md={3}
        sx={{
          [theme.breakpoints.down("lg")]: {
          marginLeft: "auto",
          marginRight: "auto"
          }
        }}
      >
        <div >
          <h2 data-aos-duration="1000" data-aos="fade-right" data-aos-mirror="true">Collaboration with <br /> forward-thinking <br /> organizations</h2>
          <p component={RouterLink} to="/about-us/partners" data-aos-duration="1000" data-aos="fade-right" data-aos-mirror="true" data-aos-delay="700"className={classes["title-reference"]}>Learn more about our partnership &rarr;</p>
        </div>
      </Grid>
      <Grid item md={9} container spacing={2}    
        sx={{
        paddingLeft: "84px",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
          paddingLeft: "7%",
          paddingRight: "7%",
          marginTop: "4%"
        }
        }}
      >
        {partnersList}
      </Grid>
    </Grid>
  </div>
  )
};

export default Partners;
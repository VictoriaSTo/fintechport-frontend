import { Grid } from "@mui/material";
import theme from '../UI/Theme';

import useFetch from '../../hooks/useFetch';
import ServerResponseStatus from '../../pages/HelperPages/ServerResponseStatus';

const Partners = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data } = useFetch(`${apiUrl}/partners`);

  if (loading || error) return <ServerResponseStatus loading={loading} error={error} />

  const partnersList = data.length && data.map((partner) => { 
    const { id, name, logo } = partner;
    
    return (
      <Grid item xs={6} md={2.2} key={id}>
         <img data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" src={logo[0].url} alt={name} class="logo"/>
      </Grid> 
    )
  })

  return (
  <div class="section-partners u-margin-bottom-medium">
    <div class="u-center-text">
        <h2 class="heading-secondary">We Partner With</h2>
        <div class="u-margin-top-medium">
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
      </div>
    </div>
  </div>
  )
};

export default Partners;
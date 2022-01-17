import React from 'react';
import ManagerCard from './ManagerCard';
// import ManagerDetails from './ManagerDetails';
import useFetch from '../../hooks/useFetch';
import ServerResponseStatus from '../../pages/HelperPages/ServerResponseStatus';

import { Grid } from '@mui/material';


const ManagmentList = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data } = useFetch(`${apiUrl}/managments`);
  
  if (loading || error) return <ServerResponseStatus loading={loading} error={error} />

  const managersList = data.map((manager) => {
    return (
        <Grid item xs={12} md={4} key={manager.id}>
          <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
            <ManagerCard manager={manager}/>
          </div>
        </Grid>
    )
  })

  return (
    <>
      {/* <ManagerDetails /> */}
      <div class="section-managment">
          <h1 class="heading-secondary u-margin-bottom-small">Leadership</h1>
          <p class="u-margin-bottom-medium">It takes many aspects for a new talent or startup to grow. At Fintechport, we are not partial problem solvers who slap band-aids on big problems. Our business expertise with our personal experiences allow us to provide comprehensive solutions to any challenge we face.</p>
        <Grid container spacing={2}>
          {managersList}
        </Grid>
      </div>
    </>
  )
};

export default ManagmentList;
import React from 'react';
import ManagerCard from './ManagerCard';
import classes from './ManagmentList.module.css';
// import ManagerDetails from './ManagerDetails';
import useFetch from '../../hooks/useFetch';
import LoadingSpinner from '../UI/LoadingSpinner';
import ServerError from '../../pages/HelperPages/ServerError';

import { Grid } from '@mui/material';

const ManagmentList = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data } = useFetch(`${apiUrl}/managments`);
  
  if (loading) return <LoadingSpinner />
  if (error) return <ServerError />

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
<React.Fragment>
  {/* <ManagerDetails /> */}
  <div className={classes["section-managment"]}>
    <div className={classes["title-container"]}>
      <h1 className={classes["title"]}>Leadership</h1>
      <p className={classes["subtitle"]}>It takes many aspects for a new talent or startup to grow. At Fintechport, we are not partial problem solvers who slap band-aids on big problems. Our business expertise with our personal experiences allow us to provide comprehensive solutions to any challenge we face.</p>
    </div>
    <Grid container spacing={2}>
      {managersList}
    </Grid>
  </div>
</React.Fragment>
  )
};

export default ManagmentList;
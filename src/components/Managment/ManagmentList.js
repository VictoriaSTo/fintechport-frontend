import React from 'react';
import WrapperNoColor from '../UI/WrapperNoColor';
import ManagerCard from './ManagerCard';
import classes from './ManagmentList.module.css';
// import ManagerDetails from './ManagerDetails';
import useFetch from '../../hooks/useFetch';

import { Grid } from '@mui/material';

const ManagmentList = () => {
  const { loading, error, data } = useFetch('http://localhost:1337/managments');
  
  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error</p>

  const managersList = data.map((manager) => {
    return (
        <Grid item xs={12} md={4} key={manager.id}>
          <div data-aos-duration="1000" data-aos="zoom-in" data-aos-once="true">
            <ManagerCard manager={manager}/>
          </div>
        </Grid>
    )
  })

  return (
<React.Fragment>
  {/* <ManagerDetails /> */}
  <WrapperNoColor>
    <div className={classes["title-container"]}>
      <h2>LEADERSHIP</h2>
      <p>It takes many aspects for a new talent or startup to grow. At Fintechport, we are not partial problem solvers who slap band-aids on big problems. Our business expertise with our personal experiences allow us to provide comprehensive solutions to any challenge we face.</p>
    </div>
    <Grid container spacing={2}>
      {managersList}
    </Grid>
  </WrapperNoColor>
</React.Fragment>
  )
};

export default ManagmentList;
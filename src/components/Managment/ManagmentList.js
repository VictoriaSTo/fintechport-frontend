import React from 'react';
import WrapperNoColor from '../UI/WrapperNoColor';
import ManagerCard from './ManagerCard';
import classes from './ManagmentList.module.css';
import ManagerDetails from './ManagerDetails';
import managmentInfo from './managmentInfo';

import { Grid } from '@mui/material';

const managersList = managmentInfo.map((manager) => {
  return (
      <Grid item xs={12} md={4}>
        <div data-aos-duration="1000" data-aos="zoom-in" data-aos-once="true">
          <ManagerCard manager={manager} />
        </div>
      </Grid>
  )
})

const ManagmentList = () => {
  return (
<React.Fragment>
  {/* <ManagerDetails /> */}
  <WrapperNoColor>
    <div className={classes["title-container"]}>
      <h2>LEADERSHIP</h2>
      <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
    </div>
    <Grid container spacing={2}>
      {managersList}
    </Grid>
  </WrapperNoColor>
</React.Fragment>
  )
};

export default ManagmentList;
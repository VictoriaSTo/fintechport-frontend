// import Modal from '../UI/Modal';
import { Grid } from '@mui/material';
// import classes from './ManagerDetails.classes.css';

import anny from '../../assets/managment/anny.webp';

const ManagerDetails = (props) => {
  return (
    // <Modal>
      <Grid container>
        <Grid item xs={12} md={5} sx={{background: "black"}}>
          <img src={anny} alt="manager" style={{width: "100%"}}/>
          <p style={{color: "#08D9D6", textAlign: "center", alignItems: "center"}}>name@fintechport.com</p>
        </Grid>
        <Grid item xs={12} md={7} sx={{padding: "5%"}}>
          <h1>Anny Wang</h1>
          <h3>Shenzhen Big Data Research & Development association specialist</h3>
          <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
        </Grid>
      </Grid>
    /* </Modal> */
  )
};

export default ManagerDetails;
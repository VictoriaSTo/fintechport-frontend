import React from 'react';
import theme from '../UI/Theme';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import classes from "./ApplicationForm.module.css";
import Wrapper from "../UI/Wrapper";
import project from "../../assets/project.jpg";
import ContainedButtonEl from "../UI/ContainedButton";

const ApplicationForm = () => {
  return (
    <Wrapper>
      <div className={classes["banner__background"]}>
        <div className={classes["banner__text"]}>
          <h3 
            data-aos="fade-right" 
            data-aos-duration="1000" 
            data-aos-mirror="true"
            data-aos-once="true"
          >
            Contact us to get solution
          </h3>
          <p 
            data-aos="fade-right" 
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
          </p>
          <Stack
            component="form"
            spacing={2}
            noValidate
            autoComplete="off"
            sx={{
              [theme.breakpoints.down("lg")]: {
                alignItems: "center"}
            }}
          >
            <TextField id="filled-basic" label="" variant="filled" size="small"
                        sx={{
                          width: '60%',
                          [theme.breakpoints.down("md")]: {
                            width: "100%"}
                        }}/>
            <p 
              className={classes["banner__text--small"]} 
              data-aos="fade-right" 
              data-aos-duration="1000" 
              data-aos-mirror="true"
              data-aos-once="true"
            >
              *By clicking “Primary action” you accepting ipsum dolor.
            </p>
            <div 
              style={{width:"92%"}}
              data-aos="fade-right" 
              data-aos-duration="1000" 
              data-aos-once="true"
            >
              <ContainedButtonEl action={"Submit"} />
            </div>
          </Stack>
        </div>
      </div>
    </Wrapper>
  )
};

export default ApplicationForm;
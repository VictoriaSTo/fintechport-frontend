import * as React from 'react';
import { Link as RouterLink} from "react-router-dom";

import Wrapper from '../UI/WrapperNoColor';
import classes from './NewsList.module.css';
import microsoft from '../../assets/articles/microsoft.jpeg';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const NewsList = () => {
  return (
    <Wrapper>
      <div className={classes.title}>
        <h2>TECH NEWS</h2>
        <div className={classes["title-underline"]} />
      </div>
      <div className={classes.articles}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4} component={RouterLink} to="/tech-connect/news/:id" sx={{textDecoration: "none"}}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="microsoft article"
                height="290"
                image={microsoft}
              />
              <CardContent>
                <h3>Microsoft releases its Windows 10 November 2021 update</h3>
                <p className={classes["article-link"]}>READ MORE ...</p>
                <Typography variant="body2" color="text.secondary">
                  November 10, 2021
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} component={RouterLink} to="/tech-connect/news/:id" sx={{textDecoration: "none"}}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="microsoft article"
                height="290"
                image={microsoft}
              />
              <CardContent>
                <h3>Microsoft releases its Windows 10 November 2021 update</h3>
                <p className={classes["article-link"]}>READ MORE ...</p>
                <Typography variant="body2" color="text.secondary">
                  November 10, 2021
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} component={RouterLink} to="/tech-connect/news/:id" sx={{textDecoration: "none"}}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="microsoft article"
                height="290"
                image={microsoft}
              />
              <CardContent>
                <h3>Microsoft releases its Windows 10 November 2021 update</h3>
                <p className={classes["article-link"]}>READ MORE ...</p>
                <Typography variant="body2" color="text.secondary">
                  November 10, 2021
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Wrapper>
  )
};

export default NewsList;
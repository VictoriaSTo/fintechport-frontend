import * as React from 'react';
import { Link as RouterLink} from "react-router-dom";

import classes from './NewsList.module.css';
import ServerResponseStatus from '../../pages/HelperPages/ServerResponseStatus';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import useFetch from '../../hooks/useFetch';

const NewsList = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data } = useFetch(`${apiUrl}/last-news`);

  if (loading || error) return <ServerResponseStatus loading={loading} error={error} />

  console.log(data)

  return (
    <>
      <div className={classes.title}>
        <h2>TECH NEWS</h2>
        <div className={classes["title-underline"]} />
      </div>
      <div className={classes.articles}>
        <Grid container spacing={6}>
          {data.map((news) => {
            const { id, title, image, date } = news;
            return (
              <Grid key={id} item xs={12} md={4} component={RouterLink} to={`/tech-connect/news/${id}`} sx={{textDecoration: "none"}}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt={title}
                    height="290"
                    image={`${apiUrl}${image[0].url}`}
                  />
                  <CardContent>
                    <h3>{title}</h3>
                    <p className={classes["article-link"]}>READ MORE ...</p>
                    <Typography variant="body2" color="text.secondary">
                      {date}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </>
  )
};

export default NewsList;
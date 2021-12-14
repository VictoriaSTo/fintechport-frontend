import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import classes from './EventsList.module.css';
import Banner from './EventsListBanner';
import Wrapper from '../UI/WrapperNoColor';
import Calendar from '../UI/Calendar';
// import eventsInfo from './eventsInfo';
import useFetch from '../../hooks/useFetch';

const EventsList = () => {
  const { loading, error, data } = useFetch('http://localhost:1337/events');
  const apiUrl = 'http://localhost:1337';

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error</p>

  console.log(data);

  return (
    <React.Fragment>
      <Banner />
      <Wrapper>
        <div className={classes.articles}>
          <div className={classes["articles--flex"]}>
            <h3 className={classes["articles__category"]}>Upcoming Events</h3>
            {/* <Calendar /> */}
          </div>
          <Grid container spacing={6} sx={{paddingTop: "2%", paddingBottom: "2%"}}>
            {data.map((event) => {
              const { id, title, image, date, place, description, category, link} = event;
              if (category === "upcoming") {
                return (
                  <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345 }} key={id} className={classes.article}>
                      <CardMedia
                        component="img"
                        alt={title}
                        height="290"
                        image={`${apiUrl}${image.url}`}
                      />
                      <CardContent>
                        <h3 className={classes["article__title"]}>{title}</h3>
                        <p className={classes["article__subtitle--blue"]}>{date}</p>
                        <p className={classes["article__subtitle"]}>{place}</p>
                        <p>{description}</p>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              }
            })}
          </Grid>
          <div className={classes["article__divider"]} />
          <h3 className={classes.subtitle}>Event Gallery</h3>
          <Grid container spacing={6} sx={{paddingTop: "2%", paddingBottom: "2%"}}>
            {data.map((event) => {
              const { id, title, image, date, place, description, category} = event;
              if (category === "past") {
                return (
                  <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345 }} key={id}>
                      <CardMedia
                        component="img"
                        alt={title}
                        height="290"
                        image={`${apiUrl}${image.url}`}
                      />
                      <CardContent>
                        <h3 style={{marginBottom: "4px", fontSize: "22px"}}>{title}</h3>
                        <Typography variant="body2" color="text.secondary" sx={{color: "#08D9D6", paddingBottom: "0"}}><b>{date}</b></Typography>
                        <Typography variant="body2" color="text.secondary" sx={{color: "black"}}><b>{place}</b></Typography>
                        <p>{description}</p>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              }
            })}
          </Grid>
        </div>
      </Wrapper>
    </React.Fragment>
  )
};

export default EventsList;
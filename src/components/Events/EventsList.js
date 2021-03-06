import React from 'react';

// Material ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';

// Project files
import classes from './EventsList.module.css';
import Wrapper from '../UI/WrapperNoColor';
// import Calendar from '../UI/Calendar';
import useFetch from '../../hooks/useFetch';
import ServerResponseStatus from '../../pages/HelperPages/ServerResponseStatus';

const EventsList = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data } = useFetch(`${apiUrl}/events`);

  if (loading || error) return <ServerResponseStatus loading={loading} error={error} />

  return (
    <>
      {/* <div className={classes["events-banner"]}>
        <h1>Stay updated</h1>
      </div> */}
      <Wrapper>
        <div className={classes["event-box"]}>
            <h1 className={classes["heading-primary"]}>Upcoming Events</h1>
            {/* <Calendar /> */}
          <Grid container spacing={6} sx={{paddingTop: "2%", paddingBottom: "2%"}}>
            {data.map((event) => {
              const { id, title, image, date, place, description, category, link} = event;
              if (category === "upcoming") {
                return (
                    <Grid item xs={12} md={4}>
                      <Card  key={id} className={classes["event"]} data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                      <a href={link}>
                        <CardMedia
                          component="img"
                          alt={title}
                          height="290"
                          image={image.url}
                        />
                      </a>
                      <CardContent>
                        <h2 className={classes["event__title"]}>{title}</h2>
                        <h3 className={classes["event__subtitle--blue"]}>{date}</h3>
                        <h3 className={classes["event__subtitle"]}>{place}</h3>
                        <p>{description}</p>
                      </CardContent>
                      </Card>
                    </Grid>
                )
              }
            })}
          </Grid>
          <div className={classes["divider"]} />
          <h1 className={classes["heading-primary"]}>Past Events</h1>
          <Grid container spacing={6} sx={{paddingTop: "2%", paddingBottom: "2%"}}>
            {data.map((event) => {
              const { id, title, image, date, place, description, category, link } = event;
              if (category === "past") {
                return (
                  <Grid key={id} item xs={12} md={4} className={classes["event"]}>
                    <Card key={id} data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                      <a href={link}>
                        <CardMedia
                          component="img"
                          alt={title}
                          height="290"
                          image={image.url}
                        />
                        <CardContent>
                        <h2 className={classes["event__title"]}>{title}</h2>
                          <h3 className={classes["event__subtitle--blue"]}>{date}</h3>
                          <h3 className={classes["event__subtitle"]}>{place}</h3>
                          <p>{description}</p>
                        </CardContent>
                      </a>
                    </Card>
                  </Grid>
                )
              }
            })}
          </Grid>
        </div>
      </Wrapper>
    </>
  )
};

export default EventsList;
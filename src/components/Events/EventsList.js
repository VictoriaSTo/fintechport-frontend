import React from 'react';

// Material ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';

// Project files
// import Calendar from '../UI/Calendar';
import useFetch from '../../hooks/useFetch';
import ServerResponseStatus from '../../pages/HelperPages/ServerResponseStatus';

const EventsList = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data } = useFetch(`${apiUrl}/events`);

  if (loading || error) return <ServerResponseStatus loading={loading} error={error} />

  return (
    <div class="section-all-events">
      <h1 class="heading-primary--main">Upcoming Events</h1>
            {/* <Calendar /> */}
          <Grid container spacing={6} sx={{paddingTop: "2%", paddingBottom: "2%"}}>
            {data.map((event) => {
              const { id, title, image, date, place, description, category, link} = event;
              if (category === "upcoming") {
                return (
                    <Grid item xs={12} md={4}>
                      <Card  key={id} class="event" data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                      <a href={link}>
                        <CardMedia
                          component="img"
                          alt={title}
                          height="290"
                          image={image.url}
                        />
                      </a>
                      <CardContent sx="padding: 0">
                        <h2 class="heading-secondary">{title}</h2>
                        <h3 class="heading-tertiary">{date}</h3>
                        <h3 class="heading-tertiary">{place}</h3>
                        <p>{description}</p>
                      </CardContent>
                      </Card>
                    </Grid>
                )
              }
            })}
          </Grid>
          <div class="divider" />
          <h1 class="heading-primary">Past Events</h1>
          <Grid container spacing={6} sx={{paddingTop: "2%", paddingBottom: "2%"}}>
            {data.map((event) => {
              const { id, title, image, date, place, description, category, link } = event;
              if (category === "past") {
                return (
                  <Grid item xs={12} md={4}>
                    <Card key={id} class="event" data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
                      <a href={link}>
                        <CardMedia
                          component="img"
                          alt={title}
                          height="290"
                          image={image.url}
                        />
                        <CardContent>
                        <h2 class="heading-secondary">{title}</h2>
                          <h3 class="heading-tertiary">{date}</h3>
                          <h3 class="heading-tertiary">{place}</h3>
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
  )
};

export default EventsList;
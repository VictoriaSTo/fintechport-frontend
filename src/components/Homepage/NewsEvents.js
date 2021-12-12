import Grid from '@mui/material/Grid';
import theme from '../UI/Theme';
import ArticleIcon from '@mui/icons-material/Article';
import EventIcon from '@mui/icons-material/Event';

import classes from './NewsEvents.module.css';
import newsInfo from '../News/newsInfo';
import eventsInfo from '../Events/eventsInfo';

const newsList = newsInfo.map((news) => {
  const { id, title, link, date } = news;
  return (
    <div data-aos-duration="1000" data-aos="fade-up">
      <Grid 
      item 
      key={id}
      sx={{
        borderBottom: "solid 1px rgba(128, 128, 128, 0.2)"
      }}
    >
        <p>{title}<span className={classes["news__subtitle"]}>{date}</span></p>
      </Grid>
    </div>
  )
});

const eventsList = eventsInfo.map((event) => {
  const { id, title, img, date, place } = event;
  return (
    <Grid item key={id} md={4}
      sx={{
        [theme.breakpoints.down("md")]: {
          marginTop: "6%"}
      }}>
      <div data-aos-duration="1000" data-aos="fade-up">
        <div className={classes.card}>
          <img className={classes["card__image"]} src={img} alt={title} />
          <div className={classes["card__text"]}>
            <p className={classes["card__text--medium"]}>{title}</p>
            <p className={classes["card__text--small"]}>{date}</p>
          </div>
        </div>
      </div>
    </Grid>
  )
})

const NewsEvents = () => {
  return (
    <Grid 
      container 
      columnSpacing={12} 
      direction="row" 
      sx={{
        paddingLeft: "7%", 
        paddingRight: "7%",
        paddingTop: "5%",
        paddingBottom: "5%",
        background: "#f8f5f7"
        }}>

      {/* News */}
      <Grid 
        container 
        item 
        direction="column" 
        xs={12} 
        md={4}
      >
        <Grid item>
          <h3 
            // data-aos-duration="1000" 
            // data-aos="fade-up"
          >
            <ArticleIcon color="secondary" sx={{fontSize: "4rem", paddingRight: "1rem"}}/>
              Our News
            </h3>
        </Grid>
        {newsList}
      </Grid>

      {/* Events */}
      <Grid 
        container 
        item 
        direction="row" 
        xs={12} 
        md={8} 
        spacing={2}
        sx={{
          [theme.breakpoints.down("md")]: {
          marginLeft: "auto",
          marginRight: "auto"
          }
        }}
      >
        <Grid item xs={12} md={12} sx={{paddingLeft: "0px"}}>
          <h3 
            // data-aos-duration="1000" 
            // data-aos="fade-up"
          >
            <EventIcon 
              color="secondary" 
              sx={{fontSize: "4rem", paddingRight: "1rem"}}
            />
              Latest Events
            </h3>
        </Grid>
        <Grid container item 
        direction="row" 
        xs={12} 
        md={12} 
        spacing={2}>
          {eventsList}
        </Grid>
      </Grid>     
    </Grid>
  )
};

export default NewsEvents;
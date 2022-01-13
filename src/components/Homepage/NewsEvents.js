import useFetch from '../../hooks/useFetch';

import Grid from '@mui/material/Grid';
import theme from '../UI/Theme';
// import EventIcon from '@mui/icons-material/Event';

import ServerResponseStatus from '../../pages/HelperPages/ServerResponseStatus';
// import eventsInfo from '../Events/eventsInfo';


const NewsEvents = (props) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data } = useFetch(`${apiUrl}/events`);

  if (loading || error) return <ServerResponseStatus loading={loading} error={error} />

  const eventsList = data.length && data.map((event) => {
    const { id, title, image, date, link } = event;
    return (
      <Grid item key={id} md={4}
        sx={{
          [theme.breakpoints.down("md")]: {
            marginTop: "6%"}
        }}>
        <div data-aos-duration="1000" data-aos="fade-up">
          <div class="card">
            <a href={link} onClick={() => {props.setHeaderValue("four")}}>
              <img class="card__image" src={image.url} alt={title} />
            </a>
            <div class="card__text">
              <p class="card__text--medium">{title}</p>
              <p class="card__text--small">{date}</p>
            </div>
          </div>
        </div>
      </Grid>
    )
  })

  return (
    <div class="section-events">
      <div class="u-center-text">
        {/* <h2 class="heading-secondary"> <EventIcon color="secondary" sx={{fontSize: "4rem", paddingRight: "1rem"}} />Join Our Events</h2> */}
        <Grid container item direction="row" xs={12} md={12} columnSpacing={6} sx={{marginTop: "4rem", marginBottom: "4rem"}}>
          {eventsList && eventsList.reverse().slice(0, 3)}
        </Grid>
      </div>
    </div>
  )
};

export default NewsEvents;


// News

// import ArticleIcon from '@mui/icons-material/Article';
// import newsInfo from '../News/newsInfo';

// const newsList = newsInfo.map((news) => {
//   const { id, title, link, date } = news;
//   return (
//     <div data-aos-duration="1000" data-aos="fade-up">
//       <Grid 
//       item 
//       key={id}
//       sx={{
//         borderBottom: "solid 1px rgba(128, 128, 128, 0.2)"
//       }}
//     >
//         <p>{title}<span class="news__subtitle">{date}</span></p>
//       </Grid>
//     </div>
//   )
// });

  /* <Grid 
    container 
    item 
    direction="column" 
    xs={12} 
    md={4}
  >
    <Grid item>
      <h3 
        data-aos-duration="1000" 
        data-aos="fade-up"
      >
        <ArticleIcon color="secondary" sx={{fontSize: "4rem", paddingRight: "1rem"}}/>
          Our News
        </h3>
    </Grid>
    {newsList}
  </Grid> */

  //  <Grid container item direction="row" spacing={2}
//   sx={{
//     [theme.breakpoints.down("md")]: {
//     marginLeft: "auto",
//     marginRight: "auto"
//     }
//   }}
// >
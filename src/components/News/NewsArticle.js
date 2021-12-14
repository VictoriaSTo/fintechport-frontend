import { useParams } from 'react-router-dom';
import classes from './NewsArticle.module.css';
import Wrapper from '../UI/WrapperNoColor';
import useFetch from '../../hooks/useFetch';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const NewsArticle = () => {
  const { id } = useParams();
  const apiUrl = 'http://localhost:1337';
  const { loading, error, data } = useFetch(`${apiUrl}/last-news/` + id);

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error</p>

  console.log(data)

  return (
    <Wrapper>
      <div className={classes.flex}>
        <div className={classes["flex-element"]}>
          <p style={{marginBottom: "0px"}}>Share</p>
          <div className={classes.flex}>
            <FacebookIcon color="secondary" className={classes.icon}/>
            <LinkedInIcon color="secondary" className={classes.icon}/>
            <TwitterIcon color="secondary" className={classes.icon}/>
            <YouTubeIcon color="secondary" className={classes.icon}/>
          </div>
        </div>
        <div className={classes["flex-element"]} style={{paddingLeft: "14%", paddingRight: "24%"}}>
          <h1>{data.title}</h1>
          <div className={classes["title-underline"]} />
          <p>{data.date}</p>
          <img src={`${apiUrl}${data.image[0].url}`} alt="microsoft" className={classes.photo}/>
          <p>{data.text}</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default NewsArticle;
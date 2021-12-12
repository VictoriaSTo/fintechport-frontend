import classes from './NewsArticle.module.css';
import Wrapper from '../UI/WrapperNoColor';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import microsoft from '../../assets/articles/microsoft.jpeg';

const NewsArticle = () => {
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
          <h1>Microsoft releases its Windows 10 November 2021 update</h1>
          <div className={classes["title-underline"]} />
          <p>November 10, 2021</p>
          <img src={microsoft} alt="microsoft" className={classes.photo}/>
          <h2>Industry Partners</h2>
          <p>We are required by the Ordinance to take all reasonable practicable steps to safeguard the security of personal data held by us. Cyberport will strive to protect any personal data held by us against unauthorized access or processing.  Our web-servers are hardened, protected behind "firewalls" in order to prevent unauthorized virtual access. Measures have been implemented to protect the web-servers against physical harm or theft. Notwithstanding our obligation to safeguard the security of personal data, we are unable to guarantee complete security of communications through the internet given the open nature of the internet. You will have to assess and accept the relevant risks before sending personal data to us via our web site.</p>
          <h2>How did  the team setup?</h2>
          <p>Notwithstanding our obligation to safeguard the security of personal data, we are unable to guarantee complete security of communications through the internet given the open nature of the internet. You will have to assess and accept the relevant risks before sending personal data to us via our web site.</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default NewsArticle;
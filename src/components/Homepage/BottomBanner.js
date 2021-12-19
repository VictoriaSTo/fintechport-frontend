import classes from './BottomBanner.module.css';
import ContainedButtonEl from '../UI/ContainedButton';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Banner = () => {
  return (
    <div className={classes["hero-banner"]}>
      <div className={classes["hero-banner__text"]}>
        <h2>"Fintechport proved invaluable. They have an amazing network and provided us with an entire business ecosystem."</h2>
        <p className={classes["hero-banner__text-sub"]}>Cherry, Co-Founder of WMEGT</p>
      </div>
    </div>
  )
};

export default Banner;





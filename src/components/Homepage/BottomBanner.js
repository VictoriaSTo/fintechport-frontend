import classes from './BottomBanner.module.css';
import ContainedButtonEl from '../UI/ContainedButton';

const Banner = () => {
  return (
    <div className={classes["hero-banner"]}>
      <div className={classes["hero-banner__text"]}>
        <h2>Reliability</h2>
        <p className={classes["hero-banner__text-sub"]}>Ad eos saepe lucilius, noster postulant eos saepe lucilius</p>
      </div>
    </div>
  )
};

export default Banner;





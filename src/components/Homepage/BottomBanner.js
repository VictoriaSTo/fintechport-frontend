import classes from './BottomBanner.module.css';
import ContainedButtonEl from '../UI/ContainedButton';

const Banner = () => {
  return (
    <div className={classes["hero-banner"]}>
      <div className={classes["hero-banner__text"]}>
        <h2 data-aos-duration="1000" data-aos="fade-right" data-aos-once="true">Ad eos saepe lucilius, noster postulant.</h2>
        {/* <p data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum.</p> */}
        <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" data-aos-delay="50" data-aos-mirror="true">
          {/* <ContainedButtonEl action={"Learn More"}/> */}
        </div>
      </div>
    </div>
  )
};

export default Banner;





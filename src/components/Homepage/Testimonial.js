import classes from './Testimonial.module.css';

const Testimonial = () => {
  return (
    <div className={classes["section-testimonial"]}>
      <div className={classes["testimonial__text"]}>
        <h4 className={classes["testimonial__text-primary"]}>"Fintechport proved invaluable. They have an amazing network and provided us with an entire business ecosystem."</h4>
        <p className={classes["testimonial__text-sub"]}>Cherry, Co-Founder of WMEGT</p>
      </div>
    </div>
  )
};

export default Testimonial;





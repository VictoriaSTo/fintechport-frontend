import ContainedButtonEl from "../components/UI/ContainedButton";
import classes from "./SummerCamp.module.css";
import lesson from "../assets/grad/3.jpeg"

import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const SummerCamp = () => {
  return (
    <>
      <div className={classes["grad-banner"]}>
        <div className={classes["grad-banner__text"]}>
        <h1>
          <span style={{color: "#38b449"}}>G</span>
          <span style={{color: "#ffc938"}}>R</span>
          <span style={{color: "#99258e"}}>A</span>
          <span style={{color: "#ed3829"}}>D</span>
          <br />education</h1>
        <a href="#application"><ContainedButtonEl action={"Enroll Now"}/></a>
        </div>
      </div>
      <main>
        <section className={classes.program}>
          <h2> Welcome to GRAD <br/> summer camp</h2>
          <p>GRAD stands for Games, Robots, Art, and Drones. Our mission is to  inspire children and teenagers to love science and engineering.</p>
          <div className={classes.icons}>
            <div className={classes.icon} data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
              <SportsEsportsIcon className={classes["icon__picture"]} sx={{color: "#99258e"}} />
              <p className={classes["icon__label"]}>Games</p>
            </div>
            <div className={classes.icon} data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
              <SmartToyIcon className={classes["icon__picture"]} sx={{color: "#ffc938"}} />
              <p className={classes["icon__label"]}>Robots</p>
            </div>
            <div className={classes.icon} data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" data-aos-delay="400">
              <BubbleChartIcon className={classes["icon__picture"]} sx={{color: "#38b449"}} />
              <p className={classes["icon__label"]}>Art</p>
            </div>
            <div className={classes.icon} data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" data-aos-delay="500">
              <AirplanemodeActiveIcon className={classes["icon__picture"]} sx={{color: "#ed3829"}} />
              <p className={classes["icon__label"]}>Drones</p>
            </div>
          </div>
          <h3>How it works?</h3>
            <p>We invite you to take part in our GRAD Summer Camp program, which will run from June to August 2022. During the four weeks of classroom training, your child will design, create, program, and enjoy challenges.
            The maximum number is 20 students per class. Lessons are guided by our professional teachers from Monday to Friday, 9am - 4pm. 
            <br />
            Create a bright future for your child with Fintechport!</p>
          <h3>Timetable</h3>
            <p>Option 1: <b>Jun 1st - Jun 30, 2022</b>
            <br />
            Option 2: <b>Jul 1st - Jul 31, 2022</b>
            <br />
            Option 3: <b>Aug 1st - Aug 31, 2022</b></p>
          <h3>Recommended age</h3>
            <p>Higher grade elementary students & middle school students</p>
            <p>
            <b>6-11 years old
            <br />
            12-16 years old</b>
            <br />
            (no experience needed)
            </p>
          <h3>Campus location</h3>
            <p>Shenzhen, China. Exact location will be announced soon</p>
          <h3>Curriculum</h3>
            <p>Click here</p>
        </section>
        <section className={classes["teachers-section"]}>
          <h3>Professional teachers</h3>
          <ul>
            <li>
              <div className={classes["teacher-icon-box-1"]} data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
              </div>
              <div className={classes["teacher-details"]}>
                  <p>Dr.Ludovic
                    <br />
                    Robots & Drones
                  </p>
                </div>
            </li>
            <li>
              <div className={classes["teacher-icon-box-2"]} data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
              </div>
              <div className={classes["teacher-details"]}>
                  <p>Holly
                  <br />
                    Art & Creativity
                  </p>
                </div>
            </li>
            <li>
              <div className={classes["teacher-icon-box-3"]} data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" data-aos-delay="400">
              </div>
              <div className={classes["teacher-details"]}>
                  <p>Dr.Alice
                  <br />
                    eGames (esports)
                  </p>
                </div>
            </li>
            <li>
              <div className={classes["teacher-icon-box-4"]} data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" data-aos-delay="500">
              </div>
              <div className={classes["teacher-details"]}>
                  <p>Juan
                  <br />
                    Robots & Drones
                  </p>
                </div>
            </li>
          </ul>
        </section>

        <section className={classes["testimonials-section"]}>
          <h3>Parent quote<FormatQuoteIcon sx={{fontSize: "44px", color: "#99258e", textAlign: "right"}}/></h3>
          <div className={classes.card} data-aos-duration="1000" data-aos="fade-left" data-aos-once="true">
            <div className={classes["card__inner"]}>
              <p className={classes["card__text"]}>GRAD is without a doubt the most interesting and exciting program in which my son Eric has ever participated! It has surely boosted the creative side as well as curiosity in new ideas. Eric grew in confidence and established many acquaintances with like-minded pupils. I couldn't recommend it enough.</p>
              <p className={classes["card__name"]}><i>Anny Wang</i></p>
            </div>
            <div className={classes["card__image"]}>
            </div>
          </div>          
        </section>

        <section className={classes.application} id="application">
          <div className={classes["application__text-area"]}>
            <div className={classes.application__text}>
              <h2>Enroll in the programme!</h2>
              <h4>Open a new world of opportunities for your kid</h4>
            </div>
            <div className={classes.application__button}>
              <a href="mailto:hr@fintechport.com?subject=GRAD Application&body=Thank you for applying for the summer camp Grad. Please provide the following information: Parent: Family Name, First Name, Phone Number; Child: First Name, Age; Program: Preferrable Dates. We will review your application and get back to you within 48 hours." style={{textDecoration: "none"}}>
                <ContainedButtonEl action="Enroll Now" />
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default SummerCamp;
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
            <div className={classes.icon}>
              <SportsEsportsIcon className={classes["icon__picture"]} sx={{color: "#99258e"}} />
              <p className={classes["icon__label"]}>Games</p>
            </div>
            <div className={classes.icon}>
              <SmartToyIcon className={classes["icon__picture"]} sx={{color: "#ffc938"}} />
              <p className={classes["icon__label"]}>Robots</p>
            </div>
            <div className={classes.icon}>
              <BubbleChartIcon className={classes["icon__picture"]} sx={{color: "#38b449"}} />
              <p className={classes["icon__label"]}>Art</p>
            </div>
            <div className={classes.icon}>
              <AirplanemodeActiveIcon className={classes["icon__picture"]} sx={{color: "#ed3829"}} />
              <p className={classes["icon__label"]}>Drones</p>
            </div>
          </div>
          <h3>How it works?</h3>
            <p>Notwithstanding our obligation to safeguard the security of personal data, we are unable to guarantee complete security of communications through the internet given the open nature of the internet. You will have to assess and accept the relevant risks before sending personal data to us via our web site.</p>
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
              <div className={classes["teacher-icon-box-1"]}>
              </div>
              <div className={classes["teacher-details"]}>
                  <p>Dr.Ludovic
                    <br />
                    Robots & Drones
                  </p>
                </div>
            </li>
            <li>
              <div className={classes["teacher-icon-box-2"]}>
              </div>
              <div className={classes["teacher-details"]}>
                  <p>Holly
                  <br />
                    Art & Creativity
                  </p>
                </div>
            </li>
            <li>
              <div className={classes["teacher-icon-box-3"]}>
              </div>
              <div className={classes["teacher-details"]}>
                  <p>Alice
                  <br />
                    E-Games
                  </p>
                </div>
            </li>
            <li>
              <div className={classes["teacher-icon-box-4"]}>
              </div>
              <div className={classes["teacher-details"]}>
                  <p>Dr.Juan
                  <br />
                    Robots & Drones
                  </p>
                </div>
            </li>
          </ul>
        </section>

        <section className={classes["testimonials-section"]}>
          <h3>Parent quote<FormatQuoteIcon sx={{fontSize: "44px", color: "#99258e", textAlign: "right"}}/></h3>
          <div className={classes.card}>
            <div className={classes["card__inner"]}>
              <p className={classes["card__text"]}>Notwithstanding our obligation to safeguard the security of personal data, we are unable to guarantee complete security of communications through the internet given the open nature of the internet. You will have to assese.</p>
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
              <ContainedButtonEl action="Enroll Now" />
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default SummerCamp;
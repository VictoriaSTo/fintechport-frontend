import React from 'react';
import Grid from '@mui/material/Grid';

import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import PeopleIcon from '@mui/icons-material/People';

const FintechportHub = () => {
  return (
    <main>
      <div class="section-fintechport-banner">
        <div class="banner">
          <div class="banner__text-box">
            <h1 class="heading-primary heading-primary--main">Tech Hub of QianHai, <br /> Shenzhen</h1>
          </div>
        </div>
      </div>

      <div class="section-text u-margin-bottom-small u-margin-top-medium">
        <h2 class="heading-secondary u-margin-bottom-small">About Fintechport</h2>
        <p class="u-margin-bottom-small"> Fintechport, China's leading talent&startup development platform. It is located in QianHai, Shenzhen - the hub for digital technology in China. Fintechport focuses on helping talents and technological startups from around the world enter China. We offer comprehensive services and resources from our mentors, partners and investors. With a team of committed professionals, Fintechport is a "bridge" between innovations, entrepreneurship and venture capital investment. The robust and supportive network is our essential advantage.</p>
        <h3 class="heading-tertiary u-margin-bottom-small ">Our Objectives</h3>
        <p class="u-margin-bottom-small">To cultivate innovative solutions, promote entrepreneurs and attract global talent, partners and companies to China for cooperation and commercial possibilities.</p>
        <h3 class="heading-tertiary u-margin-bottom-small ">Welcome to Fintechport</h3>
        <p>We invest and empower talents and startups who are solving some of the world's most critical problems with innovative technology-based solutions.</p>
      </div>

      <div class="section-text">
        <h2 class="heading-secondary">Why Join Fintechport?</h2>
        <Grid 
        container 
        columnSpacing={{ xs: 1, sm: 4, md: 6 }}
        rowSpacing={{ xs: 1, sm: 2, md: 2 }}
        sx={{
          textAlign: "center", 
          paddingTop: "5%",
          paddingBottom: "5%"
          }}>
          <Grid 
            item 
            xs={12} 
            md={6} 
            lg={6} 
            sx={{
              marginBottom: "4rem"
            }}
          >
            <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
              <div class="adv">
                  <WorkIcon class="adv__icon" />
                <div>
                  <h3 class="heading-tertiary">Services</h3>
                  <p>We provide a wide range of services and customize then to your startup needs.</p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid 
            item 
            xs={12} 
            md={6} 
            lg={6} 
            sx={{
              marginBottom: "4rem"
            }}
          >
            <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
              <div class="adv">
                  <CreditScoreIcon class="adv__icon" />
                <div>
                  <h3 class="heading-tertiary">Investment</h3>
                  <p>We provide investment capital to help launch your startup.</p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid 
            item 
            xs={12} 
            md={6} 
            lg={6} 
            sx={{
              marginBottom: "4rem"
            }}
          >
            <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
              <div class="adv">
                  <SchoolIcon class="adv__icon" />
                <div>
                  <h3 class="heading-tertiary">Mentorship</h3>
                  <p>Our mentors give vital insights to entrepreneurs both during and after the program, eventually saving them time and money.</p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid 
            item 
            xs={12} 
            md={6} 
            lg={6} 
            sx={{
              marginBottom: "4rem"
            }}
          >
            <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
              <div class="adv">
                  <CardGiftcardIcon class="adv__icon" />
                <div>
                  <h3 class="heading-tertiary">Perks</h3>
                  <p>Our partners offer exclusive deals on their tools & services.</p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid 
            item 
            xs={12} 
            md={6} 
            lg={6} 
            sx={{
              marginBottom: "4rem"
            }}
          >
            <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
              <div class="adv">
                  <WorkspacesIcon class="adv__icon" />
                <div>
                  <h3 class="heading-tertiary">Space</h3>
                  <p>We provide co-working space at fast-growing tech area in Futian.</p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid 
            item 
            xs={12} 
            md={6} 
            lg={6} 
            sx={{
              marginBottom: "4rem"
            }}
          >
            <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
              <div class="adv">
                  <PeopleIcon class="adv__icon" />
                <div>
                  <h3 class="heading-tertiary">Network & Community</h3>
                  <p>We connect you with our global network of investors & partners all of whom can offer valuable advice and collaboration.</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        </div>
    </main>
  )
};

export default FintechportHub;
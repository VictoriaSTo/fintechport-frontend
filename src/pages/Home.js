import React from 'react';

import TopBanner from '../components/Homepage/TopBanner';
import ApplicationForm from '../components/Homepage/ApplicationForm';
import Testimonial from '../components/Homepage/Testimonial';
import Services from '../components/Homepage/Services';
import Partners from '../components/Homepage/Partners';
import NewsEvents from '../components/Homepage/NewsEvents';

const Home = () => {
  return (
    <React.Fragment>
      <TopBanner />
      <Services />
      <Testimonial />
      <Partners />
      {/* <ApplicationForm /> */}
      <NewsEvents />
    </React.Fragment>
  )
};

export default Home;
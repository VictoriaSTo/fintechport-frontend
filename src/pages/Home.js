import React from 'react';

import TopBanner from '../components/Homepage/TopBanner';
import ApplicationForm from '../components/Homepage/ApplicationForm';
import BottomBanner from '../components/Homepage/BottomBanner';
import Services from '../components/Homepage/Services';
import Partners from '../components/Homepage/Partners';
import NewsEvents from '../components/Homepage/NewsEvents';

const Home = () => {
  return (
    <React.Fragment>
      <TopBanner />
      <Services />
      <BottomBanner />
      <Partners />
      <ApplicationForm />
      <NewsEvents />
    </React.Fragment>
  )
};

export default Home;
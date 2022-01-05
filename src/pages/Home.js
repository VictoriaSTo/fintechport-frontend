import React from 'react';

import TopBanner from '../components/Homepage/TopBanner';
import Testimonial from '../components/Homepage/Testimonial';
import Services from '../components/Homepage/Services';
import Partners from '../components/Homepage/Partners';
import NewsEvents from '../components/Homepage/NewsEvents';

const Home = (props) => {
  return (
    <React.Fragment>
      <TopBanner />
      <Services />
      <Testimonial />
      <Partners />
      <NewsEvents setHeaderValue={props.setHeaderValue} />
    </React.Fragment>
  )
};

export default Home;
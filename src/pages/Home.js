import React from 'react';

import TopBanner from '../components/Homepage/TopBanner';
import Testimonial from '../components/Homepage/Testimonial';
import Services from '../components/Homepage/Services';
import Partners from '../components/Homepage/Partners';
import NewsEvents from '../components/Homepage/NewsEvents';

const Home = (props) => {
  return (
    <>
      <TopBanner />
      <Services />
      <Testimonial />
      <Partners />
      <NewsEvents setHeaderValue={props.setHeaderValue} />
    </>
  )
};

export default Home;
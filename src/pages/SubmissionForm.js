import React from 'react';

import Banner from '../components/Application/ApplicationBanner';
import Form from '../components/Application/ApplicationForm';
import BottomBanner from '../components/Application/BottomBanner';

const SubmissionForm = () => {
  return (
    <React.Fragment>
      <Banner />
      <Form />
      {/* <BottomBanner /> */}
    </React.Fragment>
  )
};

export default SubmissionForm;
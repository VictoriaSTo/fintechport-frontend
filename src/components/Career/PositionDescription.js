import React from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import ContainedButtonEl from '../UI/ContainedButton';
import ServerResponseStatus from '../../pages/HelperPages/ServerResponseStatus';

const PositionDescription = () => {

  const { id } = useParams();
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data } = useFetch(`${apiUrl}/jobs/` + id);

  if (loading || error) return <ServerResponseStatus loading={loading} error={error} />

  return (
    <>
      <div class="position">
        <h3>{data.title}</h3>
        <p>{data.schedule_city}</p>
        <div class="position__divider"></div>
        <h4 class="position__title">Overview</h4>
      </div>
      <div class="position__description">
        <p class="position__paragraph">{data.description}</p>
        <div class="position__actions">
        <a href="mailto:hr@fintechport.com?subject=Job Application&body=Thank you for applying for the position at Fintechport. Please attach your resume and a cover letter. We will carefully review your application and get back to you soon." style={{textDecoration: "none"}}>
          <ContainedButtonEl action={"Apply"} />
          </a>
        </div>
      </div>
    </>
  )
};

export default PositionDescription;

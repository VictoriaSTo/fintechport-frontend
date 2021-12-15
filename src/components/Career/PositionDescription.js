import React from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import classes from './PositionDescription.module.css';
import ContainedButtonEl from '../UI/ContainedButton';

const PositionDescription = () => {

  const { id } = useParams();
  const apiUrl = 'http://localhost:1337';
  const { loading, error, data } = useFetch(`${apiUrl}/jobs/` + id);

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error</p>

  return (
    <React.Fragment>
      <div className={classes["position__title"]}>
        <h3>{data.title}</h3>
        <p>{data.schedule_city}</p>
        <div className={classes["position__divider"]}></div>
        <h4>Overview</h4>
      </div>
      <div className={classes["position__description"]}>
        <p>{data.description}</p>
        <div className={classes["position__actions"]}>
          <ContainedButtonEl action={"Apply"} />
        </div>
      </div>
    </React.Fragment>
  )
};

export default PositionDescription;

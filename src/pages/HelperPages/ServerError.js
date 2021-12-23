import classes from './ServerError.module.css';

const ServerError = () => {
  return (
    <div className={classes["error-message"]}>
      <h1>500 Internal Server Error</h1>
      <p> Oh no! Something bad happened. Please come back later when we fixed that problem. Thanks.</p>
    </div>
  );
}

export default ServerError;
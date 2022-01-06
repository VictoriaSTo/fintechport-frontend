import LoadingSpinner from "../../components/UI/LoadingSpinner";
import ServerError from "./ServerError";

const ServerResponseStatus = (props) => {
  if (props.loading) return <LoadingSpinner />;
  if (props.error) return <ServerError />;
};

export default ServerResponseStatus;
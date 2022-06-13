import { Navigate } from "react-router-dom";
import { useLocalState } from "../../util/authToken";
import { getToken } from "../../util/authToken";

const PrivateRoute = (props) => {
  // const [jwt, setJwt] = useLocalState("", "jwt");
  // return jwt ? props.children : <Navigate to="/" />;
  return getToken() ? props.children : <Navigate to="/" />;
};

export default PrivateRoute;
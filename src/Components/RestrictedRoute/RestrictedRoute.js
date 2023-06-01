import { useSelector } from "react-redux";
import authSelectors from "../../Redux/Auth/Selectors";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  };

export default RestrictedRoute;
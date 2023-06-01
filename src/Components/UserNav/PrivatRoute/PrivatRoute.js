import { useSelector } from "react-redux"
import {Navigate} from "react-router-dom"
import authSelectors from "../../../Redux/Auth/Selectors"

function PrivateRoute({ component: Component }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
            isLoggedIn ? Component : <Navigate to='/login'/>
    )
};

  export default PrivateRoute;
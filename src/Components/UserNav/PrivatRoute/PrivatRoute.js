import { useSelector } from "react-redux"
import { Route, Redirect, Navigate, Outlet } from "react-router-dom"
import authSelectors from "../../../Redux/Auth/Selectors"

function PrivateRoute({ component: Component, redirectTo = '/' }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        // <Route {...routeProps}>
            isLoggedIn ? Component : <Navigate to='/login'/>
        // </Route>
    )
};

// const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
//     const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

//     // const shouldRedirect = !isLoggedIn && !isRefreshing;
  
//     return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
//   };

  export default PrivateRoute;
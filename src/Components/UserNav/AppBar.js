// import { Suspense } from "react";
import { useSelector } from "react-redux";
import AuthNav from "./AuthNav.js/AuthNav";
import Navigation from "./Navigation/Navigation"
import UserMenu from "./UserMenu/UserMenu";
import authSelectors from "../../Redux/Auth/Selectors";
// import { Outlet } from "react-router-dom";

const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
        <div>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
            
            
            {/* <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense> */}
        </div>
    )
};

export default AppBar;
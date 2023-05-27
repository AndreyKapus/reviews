// import { Suspense } from "react";
import AuthNav from "./AuthNav.js/AuthNav";
import Navigation from "./Navigation/Navigation"
import UserMenu from "./UserMenu/UserMenu";
// import { Outlet } from "react-router-dom";

const AppBar = () => {
    return (
        <div>
            <Navigation/>
            <AuthNav/>
            <UserMenu/>
            {/* <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense> */}
        </div>
    )
};

export default AppBar;
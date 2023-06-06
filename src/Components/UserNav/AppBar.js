// import { Suspense } from "react";
import { useSelector } from "react-redux";
import AuthNav from "./AuthNav.js/AuthNav";
import Navigation from "./Navigation/Navigation"
import UserMenu from "./UserMenu/UserMenu";
import authSelectors from "../../Redux/Auth/Selectors";
import {NavWrapper} from './AppBar.styled'

const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
        <NavWrapper>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </NavWrapper>
    )
};

export default AppBar;
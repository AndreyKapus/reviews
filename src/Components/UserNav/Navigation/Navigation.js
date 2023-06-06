import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../../Redux/Auth/Selectors";
import {UserNav, HomePageLink, ReviewsPageLink} from './Navigation.styled'
import logo from '../../../icons/sitepoint.png'

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <div>
            <UserNav >
                <HomePageLink to='/'><img src={logo} alt="logo" width='30px' fill="#FFA500"/></HomePageLink>
                {isLoggedIn && <ReviewsPageLink to='/contacts'>My reviews</ReviewsPageLink>}   
            </UserNav>
        </div>
    )
};

export default Navigation
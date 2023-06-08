import { useSelector } from "react-redux";
import authSelectors from "../../../Redux/Auth/Selectors";
import {UserNav, HomePageLink, ReviewsPageLink} from './Navigation.styled'
import logo from '../../../icons/icons8-briefcase.svg'
import {logoStyles} from '../../../Styles/Theme'

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        
            <UserNav >
                <HomePageLink to='/'><img src={logo} alt="logo" style={logoStyles}/></HomePageLink>
                {isLoggedIn && <ReviewsPageLink to='/contacts'>My reviews</ReviewsPageLink>}   
            </UserNav>
    
    )
};

export default Navigation

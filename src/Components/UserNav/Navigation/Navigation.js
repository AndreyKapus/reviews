import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../../Redux/Auth/Selectors";
import {RiBookOpenFill} from 'react-icons/ri';
import {UserNav} from './Navigation.styled'

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <>
            <UserNav >
                <NavLink to='/'><RiBookOpenFill/></NavLink>
                {isLoggedIn && <NavLink to='/contacts'>My reviews</NavLink>}
                
            </UserNav>
        </>
    )
};

export default Navigation
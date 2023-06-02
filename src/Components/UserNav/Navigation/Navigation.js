import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../../Redux/Auth/Selectors";

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <>
            <nav >
                <NavLink to='/'>Home</NavLink>
                {isLoggedIn && <NavLink to='/contacts'>My reviews</NavLink>}
                
            </nav>
        </>
    )
};

export default Navigation
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <nav >
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contacts'>My reviews</NavLink>
            </nav>
        </>
    )
};

export default Navigation
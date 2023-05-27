import { useSelector } from "react-redux";
import authSelectors from "../../../Redux/Auth/Selectors";

const UserMenu = () => {
    const userName = useSelector(authSelectors.getUserName)
    return (
        <>
            <p>Hello {userName}</p>
            <button type="button">Log out</button>
        </>
    )
};

export default UserMenu
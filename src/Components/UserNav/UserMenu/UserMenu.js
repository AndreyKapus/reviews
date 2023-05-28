import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../../Redux/Auth/Selectors";
import { authOperations } from "../../../Redux/Auth";

const UserMenu = () => {
    const userName = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch()
    return (
        <>
            <p>Hello {userName}</p>
            <button type="button" onClick={() => dispatch(authOperations.logout())}>Log out</button>
        </>
    )
};

export default UserMenu
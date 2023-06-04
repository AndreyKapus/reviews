import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../../Redux/Auth/Selectors";
import { authOperations } from "../../../Redux/Auth";
import {UserMenuGreetings} from './UserMenu.styled'

const UserMenu = () => {
    const userName = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch()
    return (
        <>
            <UserMenuGreetings>Hello {userName}</UserMenuGreetings>
            <button type="button" onClick={() => dispatch(authOperations.logout())}>Log out</button>
        </>
    )
};

export default UserMenu
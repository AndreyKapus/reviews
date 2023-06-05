import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../../Redux/Auth/Selectors";
import { authOperations } from "../../../Redux/Auth";
import {UserMenuGreetings, UserMenuWrapper} from './UserMenu.styled'

const UserMenu = () => {
    const userName = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch()
    return (
        <UserMenuWrapper>
            <UserMenuGreetings>Hello {userName}</UserMenuGreetings>
            <button type="button" onClick={() => dispatch(authOperations.logout())}>Log out</button>
        </UserMenuWrapper>
    )
};

export default UserMenu
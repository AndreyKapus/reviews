import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../../Redux/Auth/Selectors";
import { authOperations } from "../../../Redux/Auth";
import {UserMenuGreetings, UserMenuWrapper, LogoutBtn} from './UserMenu.styled'

const UserMenu = () => {
    const userName = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch()
    return (
        <UserMenuWrapper>
            <UserMenuGreetings>Hello {userName}</UserMenuGreetings>
            <LogoutBtn type="button" onClick={() => dispatch(authOperations.logout())}>Log out</LogoutBtn>
        </UserMenuWrapper>
    )
};

export default UserMenu
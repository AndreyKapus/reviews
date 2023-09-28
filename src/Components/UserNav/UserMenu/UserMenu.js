import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../../Redux/Auth/Selectors";
import { authOperations } from "../../../Redux/Auth";
import {
  UserMenuGreetings,
  UserMenuWrapper,
  LogoutBtn,
} from "./UserMenu.styled";
import { IoIosLogOut } from "react-icons/io";

const UserMenu = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <UserMenuWrapper>
      {isLoggedIn && <UserMenuGreetings>Hello, {userName}!</UserMenuGreetings>}
      <LogoutBtn
        type="button"
        onClick={() => dispatch(authOperations.logout())}
      >
        <IoIosLogOut size="26px" />
      </LogoutBtn>
    </UserMenuWrapper>
  );
};

export default UserMenu;

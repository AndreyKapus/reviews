import { useSelector } from "react-redux";
import authSelectors from "../../../Redux/Auth/Selectors";
import {
  UserNav,
  NavListWrapper,
  HomePageLink,
  ReviewsPageLink,
  NewsLink,
} from "./Navigation.styled";
import logo from "../../../icons/icons8-briefcase.svg";
import { logoStyles } from "../../../Styles/Theme";

const Navigation = ({ setIsOpen }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <UserNav>
      <HomePageLink to="/">
        <img
          src={logo}
          alt="logo"
          style={logoStyles}
          onClick={() => setIsOpen(false)}
        />
      </HomePageLink>

      <NavListWrapper>
        {isLoggedIn && (
          <ReviewsPageLink to="/contacts" onClick={() => setIsOpen(false)}>
            My reviews
          </ReviewsPageLink>
        )}
        <NewsLink to="/news" onClick={() => setIsOpen(false)}>
          News
        </NewsLink>
      </NavListWrapper>
    </UserNav>
  );
};

export default Navigation;

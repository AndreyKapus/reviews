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
// import MobileMenu from "../../MobileMenu/MobileMenu";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <UserNav>
      <HomePageLink to="/">
        <img src={logo} alt="logo" style={logoStyles} />
      </HomePageLink>
      {/* <MobileMenu /> */}
      <NavListWrapper>
        {isLoggedIn && (
          <ReviewsPageLink to="/contacts">My reviews</ReviewsPageLink>
        )}
        <NewsLink to="/news">News</NewsLink>
      </NavListWrapper>
    </UserNav>
  );
};

export default Navigation;

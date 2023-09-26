import { useSelector } from "react-redux";
import AuthNav from "./AuthNav.js/AuthNav";
import Navigation from "./Navigation/Navigation";
import UserMenu from "./UserMenu/UserMenu";
import authSelectors from "../../Redux/Auth/Selectors";
import { NavWrapper, ContainerWrapper } from "./AppBar.styled";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useEffect, useState } from "react";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [mobWidth, setMobWidth] = useState(null);

  const handleScreenWidth = () => {
    window.screen.width < 768 ? setMobWidth(true) : setMobWidth(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenWidth);
    handleScreenWidth();
    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, [mobWidth]);

  return (
    <ContainerWrapper>
      <NavWrapper>
        {mobWidth ? <MobileMenu /> : <Navigation />}

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavWrapper>
    </ContainerWrapper>
  );
};

export default AppBar;

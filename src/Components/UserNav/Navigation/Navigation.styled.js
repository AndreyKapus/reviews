import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const UserNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 60px 20px;

  @media screen and (min-width: 768px) {
    padding: 0px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const NavListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const HomePageLink = styled(NavLink)`
  cursor: pointer;
  margin-bottom: 12px;
  margin-right: 12px;
  :hover {
    transform: scale(1.1);
  }
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: linear;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0px;
  }
`;

export const ReviewsPageLink = styled(NavLink)`
  :hover {
    transform: scale(1.1);
  }
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: linear;
  cursor: pointer;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  @media screen and (min-width: 1280px) {
    font-size: ${(p) => p.theme.fontSizes.subTitleSize};
  }
`;

export const NewsLink = styled(NavLink)`
  :hover {
    transform: scale(1.1);
  }
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: linear;
  cursor: pointer;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  @media screen and (min-width: 1280px) {
    font-size: ${(p) => p.theme.fontSizes.subTitleSize};
  }
`;

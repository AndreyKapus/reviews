import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const UserNav = styled.nav`
display: flex;
justify-content: center;
align-items: center;
`

export const HomePageLink = styled(NavLink)`
    cursor: pointer;
    margin-right: 10px;
    :hover {
        transform: scale(1.1);
      }
      transition-property: transform;
      transition-duration: 250ms;
      transition-timing-function: linear;

    @media screen and (min-width: 768px) {
        margin-right: 20px;
    }
`;

export const ReviewsPageLink = styled(NavLink)`
:hover {
    transform: scale(1.1);
  };
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: linear;
    cursor: pointer;
    color: ${p => p.theme.colors.secondaryTextColor};
    
    @media screen and (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.subTitleSize};
    };
`;


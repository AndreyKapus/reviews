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
`;

export const ReviewsPageLink = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
`
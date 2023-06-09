import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavLink = styled(NavLink)`
:hover {
    transform: scale(1.1);
  };
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: linear;
    cursor: pointer;
    &:not(:last-child) {
        margin-right: 10px;
    };
    color: ${p => p.theme.colors.secondaryTextColor};
`;
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavLink = styled(NavLink)`
    &:not(:last-child) {
        margin-right: 10px;
    };
    color: ${p => p.theme.colors.secondaryTextColor}
`
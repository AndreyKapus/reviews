import styled from '@emotion/styled';

export const UserMenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserMenuGreetings = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 10px;
    color: ${p => p.theme.colors.secondaryTextColor};
`;

export const LogoutBtn = styled.button`
    border: none;
    color: ${p => p.theme.colors.secondaryTextColor};
    background-color: ${p => p.theme.colors.accent};
`
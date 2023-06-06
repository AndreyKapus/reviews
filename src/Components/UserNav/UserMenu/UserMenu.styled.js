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
`;

export const LogoutBtn = styled.button`
    border: none;
    color: ${p => p.theme.colors.lightGray};
    background-color: ${p => p.theme.colors.primaryBg};
`
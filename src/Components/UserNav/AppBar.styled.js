import styled from '@emotion/styled';

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-items: center;
    background-color: ${p => p.theme.colors.accent};
    padding-top: 15px;
    padding-bottom: 15px;

    @media screen and (min-width: 1280px) {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`
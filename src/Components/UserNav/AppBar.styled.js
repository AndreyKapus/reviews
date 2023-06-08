import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
    width: 100%;
    background-color: ${p => p.theme.colors.accent};
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;

    @media screen and (min-width: 320px) {
    width: 320px;
    }

    @media screen and (min-width: 768px) {
    width: 768px;
    }

    @media screen and (min-width: 1280px) {
    width: 1280px;
    }
`;


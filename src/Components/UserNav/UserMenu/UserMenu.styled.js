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

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes.subTitleSize};
        margin-right: 20px;
    }

    @media screen and (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.subTitleSize};
    }
`;

export const LogoutBtn = styled.button`
    border: none;
    color: ${p => p.theme.colors.secondaryTextColor};
    background-color: ${p => p.theme.colors.accent};
    padding: 0px;
    cursor: pointer;
    :hover {
        transform: scale(1.2);
      }
      transition-property: transform;
      transition-duration: 250ms;
      transition-timing-function: linear;
`
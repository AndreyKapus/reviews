import styled from '@emotion/styled';

export const HomePageContainer = styled.div`
    margin-top: 30px;

    @media screen and (min-width: 768px) {
        margin-top: 40px;
    };

    @media screen and (min-width: 1280px) {
        margin-top: 50px;
    }
`

export const HomePageTitle = styled.h1`
    font-size: ${p => p.theme.fontSizes.desktopSubTitle};
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;
    
    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes.titleSize};
        width: 680px;
        margin-left: auto;
        margin-right: auto;
    };

    @media screen and (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.titleSize};
        width: 800px;
        margin-left: auto;
        margin-right: auto;
    };
`;

export const GetStartedBtn = styled.button`
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.primaryBg};
    font-size: ${p => p.theme.fontSizes.secondaryTextSize};
    width: 120px;
    height: 40px;
    display: block;
    padding: 10px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        transform: scale(1.2);
        background-color: ${p => p.theme.colors.hover};
      }
      transition-property: transform, background-color;
      transition-duration: 250ms;
      transition-timing-function: linear;
`;

export const Note = styled.p`
      text-align: center;
      color: ${p => p.theme.colors.lightGray};
      margin-top: 30px;
`
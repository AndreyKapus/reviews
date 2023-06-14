import styled from '@emotion/styled'

export const ConfirmationWrapper = styled.div`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;

    @media screen and (min-width: 768px) {
        margin-top: 50px;
    };
`;

export const ResendSubtitle = styled.p`
    margin-top: 30px;
    margin-bottom: 0px;
`;

export const ResendForm = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 768px) {
        margin-top: 30px;
    };
`;

export const ResendInput = styled.input`
    width: 150px;
    height: 30px;
    padding-left: 10px;
    border: none;
    border-bottom: 2px solid ${p => p.theme.colors.accent};
    
    @media screen and (min-width: 768px) {
        width: 200px;
    };

    @media screen and (min-width: 1280px) {
        width: 250px;
    }
    `;

export const ResendBtn = styled.button`
    height: 35px;
    border: none;
    border-radius: 5px;
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.secondaryTextColor};
    font-family: ${p => p.theme.fonts.primary};
    padding: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 20px;
    :hover {
        transform: scale(1.1);
        background-color: ${p => p.theme.colors.hover};
      }
      transition-property: transform, background-color;
      transition-duration: 250ms;
      transition-timing-function: linear;
    
    @media screen and (min-width: 768px) {
        width: 100px;
    }

    @media screen and (min-width: 1280px) {
        width: 120px;
    };
`;

export const ConfirmEmail = styled.div`
    font-size: ${p => p.theme.fontSizes.desktopSubTitle};
`;

export const ResendBtnText = styled.span`
    margin-right: 5px;
`;
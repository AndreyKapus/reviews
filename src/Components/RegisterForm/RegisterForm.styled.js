import styled from '@emotion/styled';

export const RegisterTitle = styled.p`
    font-size: ${p => p.theme.fontSizes.subTitleSize};
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes.desktopSubTitle};
    };
`;

export const RegWrapper = styled.div`

`;

export const RegFormWrapper = styled.div`
    width: 250px;
    margin-top: 40px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
        @media screen and (min-width: 768px) {
        width: 300px;
    };

    @media screen and (min-width: 1280px) {
        width: 330px;
        margin-top: 50px;
    };
`;

export const RegFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin-top: 30px;
`;

export const RegFormLabel = styled.label`
    color: ${p => p.theme.colors.primaryTextColor};
    &:not(:first-child) {
        margin-top: 12px;
    };
`

export const RegInput = styled.input`
    padding-left: 5px;
    margin-top: 2px;
    width: 250px;
    height: 24px;
    height: 30px;

    @media screen and (min-width: 768px) {
        width: 300px;
    }

    @media screen and (min-width: 1280px) {
        width: 330px;
    }
`;

export const RegBtn = styled.button`
    margin-top: 20px;
    width: 100%;
    height: 40px;
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.secondaryTextColor};
    border: none;
    border-radius: 2px;
    font-size: ${p => p.theme.fontSizes.secondaryTextSize};
    cursor: pointer;
    :hover {
        transform: scale(1.1);
        background-color: ${p => p.theme.colors.hover};
      }
      transition-property: transform, background-color;
      transition-duration: 250ms;
      transition-timing-function: linear;
`;

export const ConfirmEmail = styled.div`
    font-size: ${p => p.theme.fontSizes.desktopSubTitle};
`;

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
    display: inline-flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 768px) {
        margin-top: 30px;
    };
`;

export const ResendInput = styled.input`
    width: 150px;
    height: 30px;
    margin-right: 10px;
    padding-left: 10px;
    border: none;
    border-bottom: 2px solid ${p => p.theme.colors.accent};

    
    @media screen and (min-width: 768px) {
        width: 200px;
    }

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

export const ResendBtnText = styled.span`
    margin-right: 5px;
`;
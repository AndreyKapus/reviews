import styled from '@emotion/styled';

export const RegFormWrapper = styled.div`
    width: 250px;
    margin-top: 30px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
        @media screen and (min-width: 768px) {
        width: 300px;
        margin-top: 40px;
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
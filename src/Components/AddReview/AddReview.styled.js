import styled from '@emotion/styled';

export const AddReviewWrapper = styled.div`
    width: 260px;
    margin-top: 30px;
    display: flex;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px) {
        width: 400px; 
    };
`;

export const AddForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const AddLabel = styled.label`
    color: ${p => p.theme.colors.primaryTextColor};
    &:not(:first-child) {
        margin-top: 12px;
    };
`;

export const AddInput = styled.input`
    padding-left: 5px;
    margin-top: 2px;
    width: 250px;
    height: 24px;

    @media screen and (min-width: 768px) {
            width: 389px;
            height: 30px;
        };
`;

export const AddBtn = styled.button`
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
        background-color: ${p => p.theme.colors.hover};
      }
      transition-property: background-color;
      transition-duration: 250ms;
      transition-timing-function: linear;
`;
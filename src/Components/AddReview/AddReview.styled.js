import styled from '@emotion/styled';

export const AddReviewWrapper = styled.div`
    width: 260px;
    margin-top: 30px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
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
`;

export const AddBtn = styled.button`
    margin-top: 20px;
    width: 100%;
    height: 30px;
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.secondaryTextColor};
    border: none;
    border-radius: 2px;
    font-size: ${p => p.theme.fontSizes.secondaryTextSize};
    cursor: pointer;
`;
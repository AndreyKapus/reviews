import styled from '@emotion/styled';

export const LoadMoreWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoadMoreBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background-color: ${p => p.theme.colors.accent};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 10px;
`;

export const LoadMorePage = styled.p`
    margin-right: 10px;
`;

export const PlugBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background-color: ${p => p.theme.colors.accent};
    border: none;
    border-radius: 50%;
    margin-right: 10px;
    visibility: hidden
`;
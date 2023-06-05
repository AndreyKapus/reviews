import styled from '@emotion/styled';

export const AddWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
`;

export const ReviewsList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0px;
    max-width: 320px;
    margin-top: 24px;
    margin-right: auto;
    margin-left: auto;
    gap: 10px;
`;

export const ReviewListItem = styled.li`
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
`;

export const Vacancy = styled.p`
    font-size: 14px;
    font-weight: 700;
`;

export const VacancyValue = styled.span`
    font-size: 16px;
    font-weight: 400;
`
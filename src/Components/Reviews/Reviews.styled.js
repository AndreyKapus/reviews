import styled from '@emotion/styled';

export const AddWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
`;

export const SeachForm = styled.input`
    border: 1px solid ${p => p.theme.colors.lightGray};
    padding-left: 10px;
    border-radius: 1px 5px;
`

export const ReviewsList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0px;
    
    margin-top: 24px;
    margin-right: auto;
    margin-left: auto;
    gap: 15px;

    @media screen and (max-width: 767px) {
        max-width: 320px;
    };

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        
    };
`;

export const ReviewListItem = styled.li`
    position: relative;
    border: 1px solid ${p => p.theme.colors.accent};
    border-radius: 5px;
    padding: 10px;

    @media screen and (min-width: 768px) {
        width: 355px;
        height: 200px;
    };

    @media screen and (min-width: 1280px) {
        width: 395px;
        height: 200px;
    };
`;

export const Vacancy = styled.p`
    font-size: 14px;
    font-weight: 700;
`;

export const VacancyValue = styled.span`
    font-size: 16px;
    font-weight: 400;
`;

export const DeleteBtn = styled.button`
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
    background-color: ${p => p.theme.colors.accent};
    top: -10px;
    right: -10px;
`
import { useState } from "react";
import AddModal from "../AddReviewModal/AddReviewModal";
import {AddWrapper, ReviewsList, ReviewListItem, Vacancy, VacancyValue} from './Reviews.styled'

const AllReviews = ({reviews, onDeleteReview}) => {
    const [inputValue, setInputValue] = useState('');

    const searchReview = (e) => {
        setInputValue(e.target.value);
    };

    const filteredReviews = reviews.filter(review => {
       return review.company.toLowerCase().includes(inputValue.toLowerCase());
    })
   
    return(
        <>
            <AddWrapper>
                <AddModal/>
                <input type="text" onChange={searchReview}/>
            </AddWrapper>
            <ReviewsList>
                {reviews ? filteredReviews.map(({_id, name, company, link, date}) => {
                   return <ReviewListItem key={_id}>
                        <Vacancy>Vacancy: <VacancyValue>{name}</VacancyValue></Vacancy>
                        <Vacancy>Company: <VacancyValue>{company}</VacancyValue></Vacancy>
                        <Vacancy>Link: <VacancyValue>{link}</VacancyValue></Vacancy>
                        <Vacancy>Date: <VacancyValue>{date}</VacancyValue></Vacancy>
                        <button type="button" onClick={() => onDeleteReview(_id)}>Delete</button>
                   </ReviewListItem>
                }) : <div>No contacts</div>}
            </ReviewsList>
      
        </>
)};

export default AllReviews
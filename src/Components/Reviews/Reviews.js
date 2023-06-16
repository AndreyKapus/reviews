import { useState } from "react";
import AddModal from "../AddReviewModal/AddReviewModal";
import {AddWrapper, ReviewsList, ReviewListItem, Vacancy, ReviewsWrapper, VacancyValue, DeleteBtn, SeachForm} from './Reviews.styled'
import {VscChromeClose} from 'react-icons/vsc'


const AllReviews = ({reviews, onDeleteReview, loadMore, getAllReviews}) => {
    const [inputValue, setInputValue] = useState('');

    const searchReview = (e) => {
        setInputValue(e.target.value);
    };

    const filteredReviews = reviews && reviews.filter(review => {
       return review.company.toLowerCase().includes(inputValue.toLowerCase());
    })
   
    return(
        <ReviewsWrapper>
            <AddWrapper>
                <AddModal reviews={reviews} />
                <SeachForm type="text" onChange={searchReview} placeholder="search by company"/>
            </AddWrapper>
            <ReviewsList>
                {reviews ? filteredReviews.map(({_id, name, company, link, date}) => {
                   return <ReviewListItem key={_id}>
                        <Vacancy>Vacancy: <VacancyValue>{name}</VacancyValue></Vacancy>
                        <Vacancy>Company: <VacancyValue>{company}</VacancyValue></Vacancy>
                        <Vacancy>Link: <VacancyValue>{link}</VacancyValue></Vacancy>
                        <Vacancy>Date: <VacancyValue>{date}</VacancyValue></Vacancy>
                        <DeleteBtn type="button" onClick={() => onDeleteReview(_id)}><VscChromeClose color="white" size='9px'/></DeleteBtn>
                   </ReviewListItem>
                }) : <div>No contacts</div>}
            </ReviewsList>
                
        </ReviewsWrapper>
)};

export default AllReviews
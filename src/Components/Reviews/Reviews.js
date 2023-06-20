import { useState } from "react";
import AddModal from "../AddReviewModal/AddReviewModal";
import {AddWrapper, ReviewsList, ReviewListItem, Vacancy, ReviewsWrapper, VacancyValue, DeleteBtn, SeachForm} from './Reviews.styled'
import {VscChromeClose} from 'react-icons/vsc'
// import * as API from "../../Services/ContactsApi"
// import authSelectors from "../../Redux/Auth/Selectors";
// import { useSelector } from "react-redux";


const AllReviews = ({reviews, onDeleteReview, getAllReviews, page, total}) => {
    const [inputValue, setInputValue] = useState('');
    // const [total, setTotal] = useState('');

    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    const searchReview = (e) => {
        setInputValue(e.target.value);
    };

    // useEffect(() => {
    //     if(!isLoggedIn) {
    //       return;
    //     };
        
    //       const getAllReviewsLenght = async () => {
    //         const responce = await API.getAllLenght();
    //       setTotal(responce.data)
    //       }
    //         getAllReviewsLenght()
    //   }, [isLoggedIn])

    const filteredReviews = inputValue !== '' && total !== [] ? total.filter(review => 
        review.company.toLowerCase().includes(inputValue.toLowerCase())
     ) : reviews;  
   
    return(
        <ReviewsWrapper>
            <AddWrapper>
                <AddModal reviews={reviews} total={total} getAllReviews={getAllReviews} page={page}/>
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
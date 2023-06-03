import { useState } from "react";

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
            <input type="text" onChange={searchReview}/>
            <ul>
                {reviews ? filteredReviews.map(({_id, name, company, link, date}) => {
                   return <li key={_id}>
                        <p>Vacancy: <span>{name}</span></p>
                        <p>Company: <span>{company}</span></p>
                        <p>Link: <span>{link}</span></p>
                        <p>Date: <span>{date}</span></p>
                        <button type="button" onClick={() => onDeleteReview(_id)}>Delete</button>
                   </li>
                }) : <div>No contacts</div>}
            </ul>
      
        </>
)};

export default AllReviews
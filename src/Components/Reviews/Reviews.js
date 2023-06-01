// import { useEffect, useState } from "react"
// import * as API from "../../Services/ContactsApi"
// import authSelectors from "../../Redux/Auth/Selectors";
// import { useSelector } from "react-redux";



const AllReviews = ({reviews}) => {
   

    return(
        <>
            <ul>
                {reviews ? reviews.map(({_id, name, company, link, date}) => {
                   return <li key={_id}>
                        <p>Vacancy: <span>{name}</span></p>
                        <p>Company: <span>{company}</span></p>
                        <p>Link: <span>{link}</span></p>
                        <p>Date: <span>{date}</span></p>
                        <button type="button">Delete</button>
                   </li>
                }) : <div>No contacts</div>}
            </ul>
      
        </>
)};

export default AllReviews
import { useState } from "react"
import * as API from "../../Services/ContactsApi"

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

    const getAllReviews = async () => {
        const responce = await API.getAll();
        console.log(responce);
        setReviews(responce)
    };

    useState(() => {
    //    if(reviews === []) {
    //     return 
    //    };
       getAllReviews()
    }, [reviews]);

    return(
        <>
            <ul>
                {reviews && reviews.map((el) => {
                   return <li>
                        <div>{el}</div>
                   </li>
                })}
            </ul>
        </>
    )
};

export default AllReviews
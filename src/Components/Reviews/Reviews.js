import { useEffect, useState } from "react"
import * as API from "../../Services/ContactsApi"
import authSelectors from "../../Redux/Auth/Selectors";
import { useSelector } from "react-redux";
import ReviewsList from "../ReviewsList/ReviewsList";

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    const getAllReviews = async () => {
       
            const responce = await API.getAll();
            console.log(responce.data);
            setReviews(responce.data)
    };
    // console.log(reviews)

    useEffect(() => {
       getAllReviews()
    }, [isLoggedIn, reviews]);

    return(
        <>
            <ReviewsList reviews={reviews}/>
        </>
    )
};

export default AllReviews
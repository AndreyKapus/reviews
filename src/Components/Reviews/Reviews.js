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
            setReviews(responce.data)
    };

    useEffect(() => {
       getAllReviews()
    }, [isLoggedIn]);

    return(
        <>
            <ReviewsList reviews={reviews}/>
        </>
    )
};

export default AllReviews
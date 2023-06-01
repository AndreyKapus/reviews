import AddReview from "../../Components/AddReview/AddReview";
import AllReviews from "../../Components/Reviews/Reviews";
import { useEffect, useState } from "react"
import * as API from "../../Services/ContactsApi"
import authSelectors from "../../Redux/Auth/Selectors";
import { useSelector } from "react-redux";

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    const getAllReviews = async () => {
            const responce = await API.getAll();
            setReviews(responce.data)
    };

    const deleteReview = async (id) => {
        setReviews(prevReview => prevReview.filter(item => item._id !== id));
        await API.deleteReview(id);
    }

    useEffect(() => {
        if(!isLoggedIn) {
            return
        }
       getAllReviews()
    }, [isLoggedIn]);

    return (
        <>
            <AddReview reviews={reviews} getAllReviews={getAllReviews}/>
            {isLoggedIn && <AllReviews reviews={reviews} onDeleteReview={deleteReview}/>}
        </>
    )
};

export default ReviewsPage;
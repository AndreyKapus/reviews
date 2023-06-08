import AllReviews from "../../Components/Reviews/Reviews";
import { useEffect, useState } from "react"
import * as API from "../../Services/ContactsApi"
import authSelectors from "../../Redux/Auth/Selectors";
import { useSelector } from "react-redux";
import { Loader } from "../../Loader/Loader";

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const [isLoading, setIsLoading] = useState(false);

    // const isRefreshing = useSelector(authSelectors.getIsFetchingCurrent)

    const getAllReviews = async () => {
            setIsLoading(true)
            const responce = await API.getAll();
            setReviews(responce.data)
            setIsLoading(false)
    };

    const deleteReview = async (id) => {
        setIsLoading(true)
        setReviews(prevReview => prevReview.filter(item => item._id !== id));
        await API.deleteReview(id);
        setIsLoading(false)
    };

    useEffect(() => {
        if(!isLoggedIn) {
            return;
        }
        getAllReviews() 
    }, [isLoggedIn]);

    return (
        <>  
            {/* <AddReview reviews={reviews} getAllReviews={getAllReviews}/> */}
            {isLoggedIn && <AllReviews reviews={reviews} onDeleteReview={deleteReview}/>}
            {isLoading &&  <Loader />}
        </>
    )
};

export default ReviewsPage;
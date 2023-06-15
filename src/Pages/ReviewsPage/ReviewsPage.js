import AllReviews from "../../Components/Reviews/Reviews";
import { useEffect, useState } from "react"
import * as API from "../../Services/ContactsApi"
import authSelectors from "../../Redux/Auth/Selectors";
import { useSelector } from "react-redux";
import { Loader } from "../../Loader/Loader";
import LoadMore from "../../LoadMore/LoadMore";

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    const getAllReviews = async () => {
            setIsLoading(true)
            const responce = await API.getAll(page);
            setReviews(responce.data)
            setIsLoading(false)
    };

    const loadMore = () => {
        setPage(prevPage => prevPage + 1)
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
        };
        const getPage = async () => {
            setIsLoading(true)
            const responce = await API.getAll(page);
            setReviews(responce.data)
            setIsLoading(false)
    };
    getPage(page)
    }, [isLoggedIn, page]);

    return (
        <>  
            {/* <AddReview reviews={reviews} getAllReviews={getAllReviews}/> */}
            {isLoggedIn && <AllReviews reviews={reviews} loadMore={loadMore} getAllReviews={getAllReviews} onDeleteReview={deleteReview}/>}
            <LoadMore onLoadMore={loadMore}/>
            {isLoading &&  <Loader />}
        </>
    )
};

export default ReviewsPage;
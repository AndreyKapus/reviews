import AllReviews from "../../Components/Reviews/Reviews";
import { useEffect, useState } from "react";
import * as API from "../../Services/ContactsApi";
import authSelectors from "../../Redux/Auth/Selectors";
import { useSelector } from "react-redux";
import { Loader } from "../../Loader/Loader";
import LoadMore from "../../LoadMore/LoadMore";
import { ToastContainer, toast } from "react-toastify";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState("");
  const [lastPage, setLastPage] = useState(false);

  const showDeleteSuccess = () => {
    toast.success("Review deleted", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const getAllReviews = async (page) => {
    setIsLoading(true);
    const responce = await API.getAll(page);
    setReviews(responce.data);
    setIsLoading(false);
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const deleteReview = async (id) => {
    setIsLoading(true);
    setReviews((prevReview) => prevReview.filter((item) => item._id !== id));
    await API.deleteReview(id);
    setIsLoading(false);
    showDeleteSuccess();
  };

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    getAllReviews(page);
  }, [isLoggedIn, page]);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    const getAllReviewsLenght = async () => {
      const responce = await API.getAllLenght();
      setTotal(responce.data);
      const isLastPage = Math.ceil(total.length / 9);

      isLastPage === page ? setLastPage(true) : setLastPage(false);
    };
    getAllReviewsLenght();
  }, [isLoggedIn, page, total.length]);

  return (
    <>
      {isLoggedIn && (
        <AllReviews
          reviews={reviews}
          page={page}
          total={total}
          onDeleteReview={deleteReview}
          getAllReviews={getAllReviews}
        />
      )}
      <LoadMore
        nextPage={nextPage}
        prevPage={prevPage}
        reviews={reviews}
        total={total}
        page={page}
        lastPage={lastPage}
      />
      {isLoading && <Loader />}
      <ToastContainer />
    </>
  );
};

export default ReviewsPage;

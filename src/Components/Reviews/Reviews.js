import { useState } from "react";
import AddModal from "../AddReviewModal/AddReviewModal";
import {
  AddWrapper,
  ReviewsList,
  ReviewListItem,
  Vacancy,
  ReviewsWrapper,
  VacancyValue,
  VacancyLink,
  DeleteBtn,
  SeachForm,
} from "./Reviews.styled";
import { VscChromeClose } from "react-icons/vsc";

const AllReviews = ({
  reviews,
  onDeleteReview,
  getAllReviews,
  page,
  total,
}) => {
  const [inputValue, setInputValue] = useState("");

  const searchReview = (e) => {
    setInputValue(e.target.value);
  };

  const filteredReviews =
    inputValue !== ""
      ? total.filter((review) =>
          review.company.toLowerCase().includes(inputValue.toLowerCase())
        )
      : reviews;

  return (
    <ReviewsWrapper>
      <AddWrapper>
        <AddModal
          reviews={reviews}
          total={total}
          getAllReviews={getAllReviews}
          page={page}
        />
        <SeachForm type="text" onChange={searchReview} placeholder="search" />
      </AddWrapper>
      <ReviewsList>
        {reviews ? (
          filteredReviews.map(({ _id, name, company, link, date }) => {
            return (
              <ReviewListItem key={_id}>
                <Vacancy>
                  Vacancy: <VacancyValue>{name}</VacancyValue>
                </Vacancy>
                <Vacancy>
                  Company: <VacancyValue>{company}</VacancyValue>
                </Vacancy>
                <Vacancy>
                  Link: <VacancyLink to={link}>company page</VacancyLink>
                </Vacancy>
                <Vacancy>
                  Date: <VacancyValue>{date}</VacancyValue>
                </Vacancy>
                <DeleteBtn type="button" onClick={() => onDeleteReview(_id)}>
                  <VscChromeClose color="white" size="9px" />
                </DeleteBtn>
              </ReviewListItem>
            );
          })
        ) : (
          <div>No contacts</div>
        )}
      </ReviewsList>
    </ReviewsWrapper>
  );
};

export default AllReviews;

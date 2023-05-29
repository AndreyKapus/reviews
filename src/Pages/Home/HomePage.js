import AllReviews  from "../../Components/Reviews/Reviews";
import AddReview from "../../Components/AddReview";

const HomePage = () => {
    return (
        <div>
            <h1>This is home page</h1>
            <AddReview/>
            <AllReviews/>
        </div>
    )
};

export default HomePage;
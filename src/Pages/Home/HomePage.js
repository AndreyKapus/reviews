import AllReviews  from "../../Components/Reviews/Reviews";
import AddReview from "../../Components/AddReview";
import { Outlet } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>This is home page</h1>
            <AddReview/>
            <AllReviews/>
            <Outlet/>
        </div>
    )
};

export default HomePage;
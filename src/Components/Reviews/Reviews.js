import { useState } from "react"
import * as API from "../../Services/ContactsApi"
import {token} from '../../Redux/Auth/AuthOperations';
import authSelectors from "../../Redux/Auth/Selectors";
import { useSelector } from "react-redux";

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    const getAllReviews = async () => {
        try {
            const responce = await API.getAll();
            console.log(responce);
            setReviews(responce)
        } catch (error) {
           return error.message
        }
    };

    // useState(() => {
    //    getAllReviews()
    // }, [isLoggedIn, reviews]);

    return(
        <>
            <ul>
                <li>Страница контактов</li>
                {/* <li>All reviews</li>
                {isLoggedIn ? reviews.map((el) => {
                   return <li>
                        <div>{el.name}</div>
                   </li>
                }) : <div>No contacts</div>} */}
            </ul>
        </>
    )
};

export default AllReviews
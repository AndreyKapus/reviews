const ReviewsList = ({reviews}) => {
    // console.log(reviews)
    return (
        <>
            <ul>
                <li>Страница контактов</li>
                {reviews ? reviews.map((el) => {
                   return <li>
                        <p>Vacancy: <span>{el.name}</span></p>
                        <p>Company: <span>{el.company}</span></p>
                        <p>Link: <span>{el.link}</span></p>
                        <p>Date: <span>{el.date}</span></p>
                   </li>
                }) : <div>No contacts</div>}
            </ul>
        </>
    )
};

export default ReviewsList
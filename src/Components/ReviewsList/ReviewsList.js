const ReviewsList = ({reviews}) => {
    // console.log(reviews)
    return (
        <>
            <ul>
                <li>Страница контактов</li>
                {reviews ? reviews.map((el) => {
                   return <li>
                        <div>{el.name}</div>
                   </li>
                }) : <div>No contacts</div>}
            </ul>
        </>
    )
};

export default ReviewsList
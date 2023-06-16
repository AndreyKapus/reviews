const LoadMore = ({nextPage, prevPage}) => {
    return (
    <>
        <button type="button" onClick={nextPage}>Next page</button>
        <button type="button" onClick={prevPage}>Prev page</button>
    </>
    )
};

export default LoadMore;
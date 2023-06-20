import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import {LoadMoreWrapper, LoadMoreBtn, LoadMorePage} from './LoadMore.styled'
import { useState } from 'react';

const LoadMore = ({nextPage, prevPage, page, total, lastPage}) => {
    // const [lastPage, setLastPage] = useState(false);

    // if(total) {
    //     const countLastPage = () => {
    //         const isLastPage = total.length / 9
            
    //         if(isLastPage <= page) {
    //             setLastPage(true)
    //         };
    //         return
    //     };
    //     countLastPage()
        
    // }

    // console.log(lastPage)

    return (
    <LoadMoreWrapper>
        {page !== 1 && <LoadMoreBtn type="button" onClick={prevPage}>{<AiOutlineArrowLeft color='white'/>}</LoadMoreBtn>}
        <LoadMorePage>{page}</LoadMorePage>
        {!lastPage && <LoadMoreBtn type="button" onClick={nextPage}>{<AiOutlineArrowRight color='white'/>}</LoadMoreBtn>}
    </LoadMoreWrapper>
    )
};

export default LoadMore;
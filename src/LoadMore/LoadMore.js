import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import {LoadMoreWrapper, LoadMoreBtn, LoadMorePage} from './LoadMore.styled'

const LoadMore = ({nextPage, prevPage, page}) => {
    return (
    <LoadMoreWrapper>
        <LoadMoreBtn type="button" onClick={prevPage}>{<AiOutlineArrowLeft color='white'/>}</LoadMoreBtn>
        <LoadMorePage>{page}</LoadMorePage>
        <LoadMoreBtn type="button" onClick={nextPage}>{<AiOutlineArrowRight color='white'/>}</LoadMoreBtn>
    </LoadMoreWrapper>
    )
};

export default LoadMore;
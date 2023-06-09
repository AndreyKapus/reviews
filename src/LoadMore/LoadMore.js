import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import {LoadMoreWrapper, LoadMoreBtn, LoadMorePage, PlugBtn} from './LoadMore.styled'

const LoadMore = ({nextPage, prevPage, page, total, lastPage}) => {

    return (
        <>
            {total && total.length > 9 && 
                    <LoadMoreWrapper>
                    {page !== 1 ? 
                        <LoadMoreBtn type="button" onClick={prevPage}>
                            {<AiOutlineArrowLeft color='white'/>}
                        </LoadMoreBtn> : 
                            <PlugBtn type='button' disabled={true}>{<AiOutlineArrowLeft color='white'/>}</PlugBtn>}
                    <LoadMorePage>{page}</LoadMorePage>
                    {!lastPage ? <LoadMoreBtn type="button" onClick={nextPage}>{<AiOutlineArrowRight color='white'/>}</LoadMoreBtn> :
                     <PlugBtn type='button' disabled={true}>{<AiOutlineArrowLeft color='white'/>}</PlugBtn>}
                </LoadMoreWrapper>
            }
        </>
    )
};

export default LoadMore;
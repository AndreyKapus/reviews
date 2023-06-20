import {BsFillRocketTakeoffFill} from 'react-icons/bs'
import {HomePageTitle,
    HomePageContainer,
    GetStartedBtn,
    Note,
    GetStartedBtnText,
    RocketIconWrapper,
} from './HomePage.styled'

const HomePage = () => {
    return (
        <HomePageContainer>
            <HomePageTitle>Track your job reviews, organize your dream job search in a convenient review manager.</HomePageTitle>
            <GetStartedBtn to='/register'>
                <GetStartedBtnText>Get started</GetStartedBtnText>
                <RocketIconWrapper><BsFillRocketTakeoffFill color='white'/></RocketIconWrapper>
            </GetStartedBtn>
            <Note>(Development is ongoing, the application may be temporarily unavailable during the update process.)</Note>
        </HomePageContainer>
    )
};

export default HomePage;
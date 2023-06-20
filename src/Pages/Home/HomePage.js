import {HomePageTitle,
    HomePageContainer,
    GetStartedBtn,
    Note
} from './HomePage.styled'

const HomePage = () => {
    return (
        <HomePageContainer>
            <HomePageTitle>Track your job reviews, organize your dream job search in a convenient review manager.</HomePageTitle>
            <GetStartedBtn type="button">Get started</GetStartedBtn>
            <Note>(Development is ongoing, the application may be temporarily unavailable during the update process.)</Note>
        </HomePageContainer>
    )
};

export default HomePage;
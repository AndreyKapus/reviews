import {
  NewsList,
  NewsCardLink,
  NewsListItem,
  NewsSection,
  NewsPageImg,
} from "./NewsPage.styled";
import mainPageImg from "../../images/main.jpg";
import vacancyImg from "../../images/vacancies.jpg";
import topImg from "../../images/top-50.jpg";
import newsImg from "../../images/news.jpg";

const NewsPage = () => {
  return (
    <NewsSection>
      <NewsList>
        <NewsListItem>
          <NewsCardLink>
            <NewsPageImg src={mainPageImg} alt="main page"></NewsPageImg>
            <h3>Main</h3>
            <p></p>
          </NewsCardLink>
        </NewsListItem>
        <NewsListItem>
          <NewsCardLink>
            <NewsPageImg src={vacancyImg} alt="vacancy"></NewsPageImg>
            <h3>Vacancy</h3>
            <p></p>
          </NewsCardLink>
        </NewsListItem>
        <NewsListItem>
          <NewsCardLink>
            <NewsPageImg src={topImg} alt="Top 50 companies"></NewsPageImg>
            <h3>Top-50</h3>
            <p></p>
          </NewsCardLink>
        </NewsListItem>
        <NewsListItem>
          <NewsCardLink>
            <NewsPageImg src={newsImg} alt="Trends"></NewsPageImg>
            <h3>Trends</h3>
            <p></p>
          </NewsCardLink>
        </NewsListItem>
      </NewsList>
    </NewsSection>
  );
};

export default NewsPage;

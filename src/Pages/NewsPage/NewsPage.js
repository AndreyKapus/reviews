import {
  NewsList,
  NewsCardLink,
  NewsListItem,
  NewsSection,
  NewsPageImg,
  CardTitle,
  CardText,
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
          <NewsCardLink href="https://dou.ua" target="blanc">
            <div>
              <NewsPageImg src={mainPageImg} alt="main page"></NewsPageImg>
              <CardTitle>Main</CardTitle>
              <CardText>The main community of programmers...</CardText>
            </div>
          </NewsCardLink>
        </NewsListItem>
        <NewsListItem>
          <NewsCardLink href="https://jobs.dou.ua" target="blanc">
            <div>
              <NewsPageImg src={vacancyImg} alt="vacancy"></NewsPageImg>
              <CardTitle>Vacancy</CardTitle>
              <CardText>Find a job, vacancies of leading companies...</CardText>
            </div>
          </NewsCardLink>
        </NewsListItem>
        <NewsListItem>
          <NewsCardLink href="https://jobs.dou.ua/top50/" target="blanc">
            <div>
              <NewsPageImg src={topImg} alt="Top 50 companies"></NewsPageImg>
              <CardTitle>Top-50</CardTitle>
              <CardText>TOP-50 largest IT companies of Ukraine...</CardText>
            </div>
          </NewsCardLink>
        </NewsListItem>
        <NewsListItem>
          <NewsCardLink href="https://dou.ua/lenta/" target="blanc">
            <div>
              <NewsPageImg src={newsImg} alt="Trends"></NewsPageImg>
              <CardTitle>News</CardTitle>
              <CardText>News, analytics, articles, interviews...</CardText>
            </div>
          </NewsCardLink>
        </NewsListItem>
      </NewsList>
    </NewsSection>
  );
};

export default NewsPage;

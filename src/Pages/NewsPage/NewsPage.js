import {
  NewsList,
  NewsCardLink,
  NewsListItem,
  NewsSection,
} from "./NewsPage.styled";

const NewsPage = () => {
  return (
    <NewsSection>
      <NewsList>
        <NewsCardLink>
          <NewsListItem>
            <img src="#" alt="main page"></img>
            <h3>Main</h3>
            <p></p>
          </NewsListItem>
        </NewsCardLink>
        <NewsCardLink>
          <NewsListItem>
            <img src="#" alt="vacancy"></img>
            <h3>Vacancy</h3>
            <p></p>
          </NewsListItem>
        </NewsCardLink>
        <NewsCardLink>
          <NewsListItem>
            <img src="#" alt="Top 50 companies"></img>
            <h3>Top-50</h3>
            <p></p>
          </NewsListItem>
        </NewsCardLink>
        <NewsCardLink>
          <NewsListItem>
            <img src="#" alt="Trends"></img>
            <h3>Trends</h3>
            <p></p>
          </NewsListItem>
        </NewsCardLink>
      </NewsList>
    </NewsSection>
  );
};

export default NewsPage;

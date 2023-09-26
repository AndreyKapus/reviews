import styled from "@emotion/styled";

export const NewsSection = styled.div`
  padding: 24px 0px;
`;

export const NewsList = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0px;
  list-style: none;
  gap: 15px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NewsListItem = styled.li`
  max-width: auto;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid black;
  border-radius: 8px;
  border-color: ${(p) => p.theme.colors.accent};
  transition: scale 200ms linear, box-shadow 200ms linear;
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 15px) / 2);
    height: 320px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 45px) / 3);
  }

  &:hover {
    scale: 1.02;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  }
`;

export const NewsCardLink = styled.a`
  display: block;
  height: 100%;
  text-decoration: none;
`;

export const NewsPageImg = styled.img`
  max-width: 100%;
  height: 150x;
`;

export const CardTitle = styled.h3`
  margin-top: 24px;
  margin-bottom: 0px;
  color: ${(p) => p.theme.colors.accent};
  text-decoration: underline;
`;

export const CardText = styled.p`
  margin-bottom: 0px;
  color: ${(p) => p.theme.colors.primaryTextColor};
`;

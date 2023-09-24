import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NewsSection = styled.div`
  padding: 24px 0px;
`;

export const NewsList = styled.ul`
  display: flex;
  justify-content: center;
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

export const NewsCardLink = styled(NavLink)`
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px;
  border: 1px solid black;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 15px) / 2);
    max-width: auto;
    height: 300px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 45px) / 4);
    max-width: auto;
    height: 400px;
  }
`;

export const NewsListItem = styled.li`
  padding: 10px;
  border: 1px solid black;
`;

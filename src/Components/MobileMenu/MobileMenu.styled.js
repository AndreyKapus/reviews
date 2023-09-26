import styled from "@emotion/styled";

export const Menu = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50%;
  height: 100%;
  background-color: ${(p) => p.theme.colors.accent};
  z-index: 1;
`;

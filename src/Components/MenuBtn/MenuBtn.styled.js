import styled from "@emotion/styled";

export const MobileMenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 10px 5px;
  left: 0px;

  background-color: transparent;
  border-top: 1px solid ${(p) => p.theme.colors.secondaryTextColor};
  border-right: 1px solid ${(p) => p.theme.colors.secondaryTextColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.secondaryTextColor};
  border-left: none;
  border-radius: 2px;
  z-index: 2;
`;

import styled from "@emotion/styled";
import { BsFillCaretDownFill } from "react-icons/bs";

export const MobileMenuBtn = styled.button`
  position: absolute;
  top: 0px;
  left: 50%;
  width: 30px;
  height: 20px;
  background-color: transparent;
  border-top: none;
  border-left: 1px solid ${(p) => p.theme.colors.secondaryTextColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.secondaryTextColor};
  border-right: 1px solid ${(p) => p.theme.colors.secondaryTextColor};
  border-radius: 2px;
  z-index: 2;
`;

export const MenuBtnIcon = styled(BsFillCaretDownFill)`
  color: ${(p) => p.theme.colors.primaryBg};
`;

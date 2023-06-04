import { css } from '@emotion/react';
import { theme } from './Theme';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
  };

  body {
    margin: 0px;
    font-family: ${theme.fonts.primary};
  }
  `

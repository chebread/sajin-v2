'use client';

import { createGlobalStyle } from 'styled-components';
import appThemes from './app-themes';
import { normalize } from 'styled-normalize';
import themedPalette from './themed-palette';

const GlobalStyle = createGlobalStyle`
  // reset
  ${normalize}
  // disable tab highlight
  button,
  textarea,
  input,
  select,
  a {
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  // theme
  body {
    ${appThemes.light};
  }
  @media (prefers-color-scheme: dark) {
    body {
      ${appThemes.dark}
    }
  }
  // settings
  body {
    position: relative;
    height: 100%;
    /* background-color: ${themedPalette.background_color};
    color: ${themedPalette.color};
    @media (prefers-color-scheme: dark) {
      background-color: ${themedPalette.background_color};
    } */
  }

`;

export default GlobalStyle;

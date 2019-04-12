import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

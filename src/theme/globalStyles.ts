import { createGlobalStyle } from 'styled-components';

export const MyGlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    height: 100%;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    height: 100%;
    font-family: 'raleway';
    font-size: 14px;
    font-weight: 400;
  }

  h1,h2,h3,h4 {
    font-weight: 700;
    margin: 0;
  }

  p {
    margin: 0;
  }
  
  ul {
    padding: 0;
    list-style: none;
  }
  
  button {
    font-weight: 600;
  }


`;

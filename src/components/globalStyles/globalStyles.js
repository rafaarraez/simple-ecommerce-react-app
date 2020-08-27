import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  
html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
    word-wrap: break-word;
}

*, *:before, *:after {
    box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
}

ol, ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
} 
.grid-container {
    display: grid;
    grid-template-areas:
      'header'
      'main'
      'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 5rem 1fr 5rem;
    height: 100%;
}

.main {
    grid-area: main;
  }
`;

export default GlobalStyles;
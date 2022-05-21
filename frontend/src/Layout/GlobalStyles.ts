import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: black;
  }

  input[type="radio"] {
    margin-right: 10px;
  }

  svg {
    font-size: 1.3rem !important;
  }

  footer {
    display: flex;
    align-items: column;
    justify-content: center;
    flex: 0 0 auto;
    padding: 10px;
    background-color: #bab5b5;
  }

  .headerLink {
    font-size: 20px;
    margin: 0 15px;
    font-weight: 700;
  }

`;

export default GlobalStyle;

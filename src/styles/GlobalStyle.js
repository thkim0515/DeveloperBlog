import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
  box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  button {
    background: inherit;
    padding: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
    overflow: visible;
    cursor: pointer;
  }

  #root{
    position: relative;
  }
`;

export default GlobalStyle;

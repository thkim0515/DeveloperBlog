import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: "NotoSansKr";
    src: url("/fonts/NotoSansKR-VariableFont_wght.ttf") format("truetype");
  }
  @font-face {
    font-family: "FjallaOne";
    src: url("/fonts/FjallaOne-Regular.ttf") format("truetype");
  }

  #root{
    position: relative;
  }

  * {
  box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: #F9F7F7;
    font-family: "NotoSansKr";
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
    font-family: "NotoSansKr";
    background: inherit;
    padding: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
    overflow: visible;
    cursor: pointer;
  }
`;

export default GlobalStyle;

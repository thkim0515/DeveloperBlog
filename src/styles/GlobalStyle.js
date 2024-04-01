import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: "NotoSansKr";
    src: url("../fonts/NotoSansKR-VariableFont_wght.ttf") format("truetype");
  }
  @font-face {
    font-family: "kage";
    src: url("../fonts/KAGE_DEMO_FONT-Black.otf") format("opentype");
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

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html, body {
    width: 100%;
    overflow-x: hidden;
    position: relative;
  }

  html {
    @media (max-width: 768px) {
      font-size: 93.75%; // 15px
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(props) => props.theme.colors.text.primary};
    
  }

  .slick-slider {
    touch-action: pan-y;
  }

  .slick-dots {
    bottom: -25px;
    
    li button:before {
      font-size: 8px;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    background: none;
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  // Reset
  body {
    margin: unset;
    padding: unset;
  }

  h1 {
    margin: unset;
    font-size: unset;
    font-weight: unset;
  }

  h2 {
    margin: unset;
    font-size: unset;
    font-weight: unset;
  }

  h3 {
    margin: unset;
    font-size: unset;
    font-weight: unset;
  }

  p {
    margin: unset;
    padding: unset;
  }

  ul {
    margin: unset;
    padding: unset;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: unset;
    outline: none;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    vertical-align: top;
  }
  
  // Typography
  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
  }

  :root {
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 10px;
  }

  // Commons
  i {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
`;

export default GlobalStyle;

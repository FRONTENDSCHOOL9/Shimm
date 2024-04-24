import NanumSquareNeo from '@assets/fonts/NanumSquareNeoTTF-cBd.woff';
import NanumSquareNeo2 from '@assets/fonts/NanumSquareNeoTTF-cBd.woff2';
import PretendardLight from '@assets/fonts/Pretendard-Light.subset.woff';
import PretendardLight2 from '@assets/fonts/Pretendard-Light.subset.woff2';
import PretendardMedium from '@assets/fonts/Pretendard-Medium.subset.woff';
import PretendardMedium2 from '@assets/fonts/Pretendard-Medium.subset.woff2';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  // Reset
  body, p, ul {
    margin: unset;
    padding: unset;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: unset;
    font-size: unset;
    font-weight: unset;
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

  textarea {
    all: unset;
  }

  hr {
    all: unset;
  }
  
  // Typography
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: local('PretendardMedium'), url(${PretendardMedium2}) format('woff2'), url(${PretendardMedium}) format('woff');
  }
  
  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: local('PretendardLight'), url(${PretendardLight2}) format('woff2'), url(${PretendardLight}) format('woff');
  }

  @font-face {
    font-family: 'NanumSquareNeo';
    font-weight: 300;
    font-display: swap;
    src: local('NanumSquareNeo'), url(${NanumSquareNeo2}) format('woff2'), url(${NanumSquareNeo}) format('woff');
  }

  :root {
    font-family: 'Pretendard', sans-serif;
    font-size: 10px;
    font-weight: 300;
    color: #0a0a0a;
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

  // Layout
  #root {
    height: 100vh;
  }

  // Swiper
  .swiper-pagination-bullet { 
    width: 10px; 
    height: 10px; 
    background-color: rgb(255, 255, 255);
  }

  .swiper-pagination {
    bottom: 20px !important;
  }

  .swiper-pagination-bullet-active { 
    width: 30px; 
    transition: width .5s; 
    border-radius: 10px; 
    background-color: #ffffff79;
  }

  .swiper-pagination-bullet-active::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
  }
`;

export default GlobalStyle;

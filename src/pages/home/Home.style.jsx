import styled from 'styled-components';
import iconOvals from '@assets/images/icon-ovals.svg';
import iconShapes from '@assets/images/icon-shapes.svg';
import iconArrow from '@assets/images/icon-arrow-black.svg';
import { Link } from 'react-router-dom';
// import iconLogin from '@assets/images/icon-login.svg'
// import iconSignup from '@assets/images/icon-signup.svg'

export const StyledMain = styled.main`
  margin-top: -100px;

  > section {
    margin-top: 30px;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-height: 400px;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const CarouselText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  color: #fff;

  @media (max-width: 740px) {
    top: 60%;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CaraouselTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 10px;

  @media (min-width: 740px) {
    font-size: 3rem;
  }

  @media (max-width: 340px) {
    font-size: 1.2rem;
  }
`;

export const CarouselAuthor = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: #b8b8b8;

  @media (min-width: 740px) {
    font-size: 2.2rem;
  }

  @media (max-width: 340px) {
    font-size: 0.9rem;
  }
`;

export const SectionLink = styled.section`
  color: #333;
  padding: 0 30px;
  box-sizing: border-box;

  > div {
    width: 100vw;
    max-width: 400px;
    margin: 0 auto 10px;
    height: 150px;
    padding: 0 15px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }

  > div:last-child {
    margin: 0 auto;
  }

  > div {
    &:before {
      content: '';
      display: block;
      width: 100px;
      height: 100px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
`;

export const RightBox = styled.div`
  text-align: right;
  background-image: linear-gradient(45deg, #fcefdd, #e6f2e7);

  &:before {
    background-image: url(${iconOvals});
  }
`;

export const LeftBox = styled.div`
  text-align: left;
  background-image: linear-gradient(45deg, #e6f2e7, #fcefdd);
  flex-direction: row-reverse;

  &:before {
    background-image: url(${iconShapes});
  }

  button {
    &:hover {
      background-color: #9f6510;
    }
  }
`;

export const TextSection = styled.div`
  display: block;
  font-size: 1.4rem;
  line-height: 1.5em;

  > p {
    margin-bottom: 10px;
  }
`;

export const SectionUser = styled.section`
  padding: 0 30px;
  box-sizing: border-box;
  font-size: 1.4rem;

  > button {
    width: 100vw;
    max-width: 400px;
    height: 40px;
    margin: 0 auto 10px;
    border-radius: 25px;
    border: 1px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > button {
    &:after {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      background-image: url(${iconArrow});
      background-repeat: no-repeat;
      margin-left: 10px;
      transition: all 0.3s ease-out;
    }
  }

  > button {
    &:hover {
      &:after {
        margin-left: 20px;
      }
    }
  }
`;

// export const IconLogin = styled.div`
//     background-image: url(${iconLogin});
//     background-repeat: no-repeat;
//     background-size: cover;
//     width: 200px;
//     height:200px;
//     flex-grow: 1;

//     @media (min-width: 740px) {
//         display: block;

//     }
// `
// export const IconSignup = styled.div`
//     background-image: url(${iconSignup});

//     @media (min-width: 740px) {
//         display: block;
//     }
// `

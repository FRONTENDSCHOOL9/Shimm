import styled from 'styled-components';
import iconCheck from '@assets/images/icon-check.svg';

export const StyledMain = styled.main`
  flex-grow: 1;
  display: flex;
`;

export const StyledSection = styled.section`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 500px;
  padding: 0 20px;
  padding-bottom: 20px;
  box-sizing: border-box;

  @media (min-width: 740px) {
    padding: 0 60px;
    padding-bottom: 40px;
  }
`;

export const ImageDiv = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const PageTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 8px;

  @media (min-width: 740px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
`;

export const Container = styled.div``;

export const Description = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 6px;

  @media (min-width: 740px) {
    font-size: 1.6;
    margin-bottom: 11px;
  }
`;

export const Info = styled.div`
  background-color: #f5f5f5;
  padding: 25px 15px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 200;
  letter-spacing: 0.02rem;
  margin-bottom: 20px;

  & li {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  & li:before {
    content: '';
    width: 10px;
    height: 4px;
    border-radius: 2px;
    background-color: #55a25a;
  }
`;

export const Preview = styled.div`
  height: 170px;
  background: ${props => props.$bgColor};
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid #fffffd;
  border-radius: 8px;
  margin-bottom: 12px;
  position: relative;

  display: flex;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${props => props.$url});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center right;
  }

  @media (min-width: 740px) {
    margin-bottom: 28px;
  }
`;

export const PlayButton = styled.button`
  width: 50px;
  height: 50px;
  margin-top: auto;
`;

export const PlayIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;

  margin-bottom: 30px;

  @media (min-width: 740px) {
    margin-bottom: 55px;
  }
`;

export const CheckBox = styled.input`
  display: none;

  & + label {
    letter-spacing: -0.02rem;
    display: flex;
    gap: 5px;
    align-items: center;
  }

  & + label::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #55a25a;
    border-radius: 50%;
    box-sizing: border-box;
  }

  &:checked + label::before {
    content: '';
    background-color: #55a25a;
    background-image: url(${iconCheck});
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media (min-width: 740px) {
    & + label {
      gap: 10px;
    }
  }
`;

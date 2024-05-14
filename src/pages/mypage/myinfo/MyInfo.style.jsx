import Input from '@components/input/Input';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MyInfoSection = styled.section`
  flex-grow: 1;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
`;

export const MyInfoWrapper = styled.div`
  font-size: 1.4rem;
  margin: 0 auto;
  transition: all 5s ease-in-out;

  @media (min-width: 740px) {
    font-size: 1.6rem;
    max-width: 500px;
  }
`;

export const MyInfoHeader = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  gap: 15px;

  & img {
    width: 80px;
    height: 80px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
  }

  & h3 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  @media (min-width: 740px) {
    margin-bottom: 50px;
  }
`;

export const MyInfoMain = styled.div``;

export const UserInfoStyled = styled.div`
  margin-bottom: 30px;
  font-size: 1.8rem;

  & p:first-child {
    margin-bottom: 10px;
    font-weight: 500;
  }

  & p:last-child {
    color: #6d746e;
  }
`;

export const ButtonLink = styled(Link)`
  margin-bottom: 30px;

  @media (min-width: 740px) {
    margin-bottom: 50px;
  }
`;

export const EditButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #55a25a;
  border-radius: 25px;
  text-align: center;
  color: white;
  font-size: 1.4rem;
  font-weight: 200;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #335633;
  }

  &:focus {
    box-shadow: inset 0 0 0 2px #224124;
  }
`;

export const CheckSection = styled.section`
  flex-grow: 1;
  position: relative;
  padding: 30px;
  box-sizing: border-box;

  display: flex;
`;

export const CheckWrapper = styled.div`
  font-size: 1.4rem;
  margin: 0 auto;
  transition: all 5s ease-in-out;
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & div {
    margin-bottom: 40px;
  }

  & h3 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 60px;
  }

  & label {
    display: block;
    font-size: 1.4rem;
    font-weight: 200;
    margin-bottom: 13px;
  }

  & p {
    font-size: 1.2rem;
    color: #f00;
  }

  @media (min-width: 740px) {
    font-size: 1.6rem;

    & h3 {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
`;

export const StyledInput = styled(Input)`
  margin-bottom: 10px;
`;

export const StyledLabel = styled.label`
  margin-top: 62px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-weight: 200;
  margin-bottom: 14px;
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MyInfoWrapper = styled.div`
  padding: 20px;
  max-width: 450px;
  width: 100%;
  color: black;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  align-items: center;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  & span {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.1;
  }

  @media screen and (max-width: 740px) {
    width: 320px;
    transition: all 5s easi-in-out;
  }
`;

export const MyInfoHeader = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 30px;
  gap: 16px;

  & span {
    font-size: 1.8rem;
  }

  & img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

export const MyInfoMain = styled.div`
  width: 100%;
`;

export const UserInfoStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;

  & span:first-child {
    font-size: 1.8rem;
    font-weight: 500;
  }

  & span:last-child {
    color: #727272;
    font-size: 1.8rem;
    font-weight: 300;
  }
`;

export const ButtonLink = styled(Link)`
  width: 100%;
  display: flex;
`;

export const EditButton = styled.button`
  width: 100%;
  height: 50px;
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
`;

export const CheckWrapper = styled.div`
  padding: 20px;
  max-width: 450px;
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  margin: 0 auto;
`;

export const Check = styled.div`
  margin-top: 192px;
  display: flex;
  flex-direction: column;

  & span {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.6;
  }

  & #password {
    height: 40px;
    margin-bottom: 40px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
  }

  & p {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
`;

export const StyledLabel = styled.label`
  margin-top: 62px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-weight: 200;
  margin-bottom: 14px;

  & input {
  }
`;

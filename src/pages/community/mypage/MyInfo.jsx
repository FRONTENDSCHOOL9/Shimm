import React from 'react';
import styled from 'styled-components';
import iconbase from '@assets/images/icon-login.svg';
import { Link } from 'react-router-dom';

const MyInfoWrapper = styled.div`
  padding: 20px;
  max-width: 740px;
  width: 100%;
  color: black;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  align-items: center;

  & img {
    width: 80px;
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

const MyInfoHeader = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 30px;

  & span {
    font-size: 1.8rem;
  }
`;

const MyInfoMain = styled.div`
  width: 100%;
`;

const UserInfoStyled = styled.ul`
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

const ButtonLink = styled(Link)`
  width: 100%;
  display: flex;
`;

const EditButton = styled.button`
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

function MyInfo() {
  return (
    <MyInfoWrapper>
      <MyInfoHeader>
        <img src={iconbase} alt="기본프로필 사진" />
        <span>닉네임</span>
      </MyInfoHeader>
      <MyInfoMain>
        <UserInfoStyled>
          <span>이메일</span>
          <span>aaa@bbb.com</span>
        </UserInfoStyled>
        <UserInfoStyled>
          <span>전화번호</span>
          <span>010-1234-5678</span>
        </UserInfoStyled>
        <UserInfoStyled>
          <span>생년월일</span>
          <span>1994년 5월 15일</span>
        </UserInfoStyled>
      </MyInfoMain>
      <ButtonLink to="/checktoinfo">
        <EditButton>프로필 수정</EditButton>
      </ButtonLink>
    </MyInfoWrapper>
  );
}

export { MyInfoWrapper, MyInfo, ButtonLink };

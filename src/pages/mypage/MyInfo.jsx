import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import iconbase from '@assets/images/icon-login.svg';
import { Link, useParams } from 'react-router-dom';
import useUserStore from '@zustand/user.mjs';
import useCustomAxios from '@hooks/useCustomAxios.mjs';

const MyInfoWrapper = styled.div`
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

const MyInfoHeader = styled.ul`
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
  const { user } = useUserStore();
  const axios = useCustomAxios();
  const [userInfo, setUserInfo] = useState();
  async function fetchUserInfo() {
    const UserRes = await axios.get(`/users/${user._id}`);
    setUserInfo(UserRes.data.item);
    console.log(userInfo);
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <MyInfoWrapper>
      <MyInfoHeader>
        <img
          src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${userInfo?.profileImage}`}
          alt="유저 프로필 사진"
        />
        <span>{userInfo?.name}</span>
      </MyInfoHeader>
      <MyInfoMain>
        <UserInfoStyled>
          <span>이메일</span>
          <span>{userInfo?.email}</span>
        </UserInfoStyled>
        <UserInfoStyled>
          <span>전화번호</span>
          <span>
            {userInfo?.phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
          </span>
        </UserInfoStyled>
        {userInfo?.birth && (
          <UserInfoStyled>
            <span>생년월일</span>
            <span>{userInfo.birth}</span>
          </UserInfoStyled>
        )}
      </MyInfoMain>
      <ButtonLink to="/mypage/checkpw">
        <EditButton>프로필 수정</EditButton>
      </ButtonLink>
    </MyInfoWrapper>
  );
}

export { MyInfoWrapper, MyInfo, ButtonLink };

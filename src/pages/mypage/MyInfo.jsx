import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/user.mjs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MyInfo() {
  const { user } = useUserStore();
  const axios = useCustomAxios();
  const [userInfo, setUserInfo] = useState();

  async function fetchUserInfo() {
    const UserRes = await axios.get(`/users/${user._id}`);
    setUserInfo(UserRes.data.item);
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <MyInfoWrapper>
      <MyInfoHeader>
        <img
          src={
            userInfo?.profileImage.startsWith('http://')
              ? userInfo?.profileImage
              : `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${userInfo?.profileImage}`
          }
          alt="내 프로필 이미지"
        />
        <span>{userInfo?.name}</span>
      </MyInfoHeader>
      {user.loginType === 'email' && (
        <MyInfoMain>
          <UserInfoStyled>
            <span>이메일</span>
            <span>{userInfo?.email}</span>
          </UserInfoStyled>
          <UserInfoStyled>
            <span>전화번호</span>
            <span>
              {userInfo?.phone?.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
            </span>
          </UserInfoStyled>
          {userInfo?.birth && (
            <UserInfoStyled>
              <span>생년월일</span>
              <span>{userInfo.birth}</span>
            </UserInfoStyled>
          )}
        </MyInfoMain>
      )}

      {user.loginType === 'email' ? (
        <ButtonLink to="/mypage/checkpw">
          <EditButton>프로필 수정</EditButton>
        </ButtonLink>
      ) : (
        <ButtonLink to="/mypage/editprofile">
          <EditButton>프로필 수정</EditButton>
        </ButtonLink>
      )}
    </MyInfoWrapper>
  );
}

export default MyInfo;

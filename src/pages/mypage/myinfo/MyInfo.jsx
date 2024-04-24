import useCustomAxios from '@hooks/useCustomAxios';
import {
  ButtonLink,
  EditButton,
  MyInfoHeader,
  MyInfoMain,
  MyInfoSection,
  MyInfoWrapper,
  UserInfoStyled,
} from '@pages/mypage/myinfo/MyInfo.style';
import useUserStore from '@zustand/user';
import { useEffect, useState } from 'react';

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
    <MyInfoSection>
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
          <h3>{userInfo?.name}</h3>
        </MyInfoHeader>
        {user.loginType === 'email' && (
          <MyInfoMain>
            <UserInfoStyled>
              <p>이메일</p>
              <p>{userInfo?.email}</p>
            </UserInfoStyled>
            <UserInfoStyled>
              <p>전화번호</p>
              <p>
                {userInfo?.phone?.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
              </p>
            </UserInfoStyled>
            {userInfo?.birth && (
              <UserInfoStyled>
                <p>생년월일</p>
                <p>{userInfo.birth}</p>
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
    </MyInfoSection>
  );
}

export default MyInfo;

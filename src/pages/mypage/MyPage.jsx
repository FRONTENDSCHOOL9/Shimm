import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import iconright from '@assets/images/icon-down.svg';
import Button from '@components/button/Button';
import { ButtonContainer } from '@pages/purchase/Purchase.style';
import {
  Link,
  Outlet,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/user.mjs';

const MyPageWrapper = styled.div`
  padding: 20px;
  max-width: 450px;
  width: 100%;
  color: black;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;

  @media screen and (max-width: 740px) {
    width: 320px;
    transition: all 5s easi-in-out;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  & img {
    width: 80px;
    border-radius: 50%;
  }
`;

const ArchiveContainer = styled.div`
  width: 100%;
`;

const ArchiveHeader = styled.div`
  display: flex;
  padding: 40px 0 10px;
  align-items: center;

  & h2 {
    font-size: 2rem;
    flex-shrink: 0;
    margin-right: 170px;
  }

  & img {
    width: 30px;
    cursor: pointer;
    transform: rotate(90deg);
    transition:
      transform 0.2s ease-in-out,
      scale 0.2s ease-in-out;

    &:hover {
      transform: rotate(90deg) scale(1.2);
    }
  }
`;

const ArchiveBox = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const MyArchive = styled.ul`
  display: flex;
  height: 130px;
  gap: 15px;
  overflow-y: hidden;
  line-height: 0.8;
  justify-content: space-between;
  & hr {
    width: 1px;
    height: 35px;
    margin-top: 26px;
    border: none;
    border-left: 1px solid #d9d9d9;
  }
`;

const RecordLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-shrink: 0;
  width: 140px;
  height: 100px;
  padding: 20px 12px;
  background: ${props => (props.background ? props.background : '')};
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  color: white;

  & span {
    font-size: 1.4rem;
    font-weight: 500;
  }

  & span:last-child {
    font-weight: 300;
    margin-top: 10px;
  }
`;

const ActiveLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 6px;
  align-items: center;
  /* flex-grow: 1; */
  cursor: pointer;

  & span:first-child {
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 2;
  }

  & span:last-child {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

function MyPage() {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const axios = useCustomAxios();
  const [record, setRecord] = useState();
  const [activity, setActivity] = useState();
  const [getPosts, setGetPosts] = useState();

  async function fetchGetPosts() {
    const PostRes = await axios.get(`/posts?type=community`);
    const currentUserId = user._id;
    const userPosts = PostRes.data.item.filter(
      post => post.user._id === currentUserId,
    );
    setGetPosts(userPosts.length);
  }

  async function fetchUserInfo() {
    const UserRes = await axios.get(`/users/${user._id}`);
    setActivity(UserRes.data.item);
  }

  async function fetchUserRecord() {
    const res = await axios.get(`/posts?type=meditation`);
    setRecord(res.data.item);
  }

  const recordList = record?.map(item => (
    <RecordLi
      key={item._id}
      item={item}
      onClick={handleMoveArchive}
      background={item.extra?.background}
    >
      <span>{item.createdAt.slice(0, 10)}</span>
      <span>{item.content}</span>
    </RecordLi>
  ));

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    fetchGetPosts();
  }, []);

  useEffect(() => {
    fetchUserRecord();
  }, []);

  function handleMoveArchive() {
    navigate('/mypage/archive');
  }

  function handleMoveArchive() {
    navigate('/mypage/archive');
  }

  function handleMoveMyList() {
    navigate('/mypage/activity/myposts');
  }

  function handleMoveMyBookmark() {
    navigate('/mypage/activity/bookmarkedposts');
  }

  return (
    <MyPageWrapper>
      <UserProfile>
        <h2>
          <span>{activity?.name}님,</span>
          <br />
          안녕하세요
        </h2>
        <img
          src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${user.profile}`}
          alt="유저의 프로필 사진"
        />
      </UserProfile>
      <Link to="/mypage/info">
        <ButtonContainer>
          <Button
            type="button"
            size="full"
            bgColor="primary"
            color="white"
            display="inline-block"
          >
            내정보 보기
          </Button>
        </ButtonContainer>
      </Link>
      <ArchiveContainer>
        <ArchiveHeader>
          <h2>나의 기록</h2>
          <img src={iconright} alt="더보기 버튼" onClick={handleMoveArchive} />
        </ArchiveHeader>
        <ArchiveBox>
          <MyArchive>{recordList}</MyArchive>
        </ArchiveBox>
        <ArchiveHeader>
          <h2>나의 활동</h2>
          <img src={iconright} alt="더보기 버튼" onClick={handleMoveMyList} />
        </ArchiveHeader>
        <ArchiveBox>
          <MyArchive>
            <ActiveLi onClick={handleMoveMyList}>
              <span>{getPosts}</span>
              <span>내가 쓴 글</span>
            </ActiveLi>
            <hr />
            <ActiveLi onClick={handleMoveMyBookmark}>
              <span>{activity?.bookmark.posts}</span>
              <span>북마크 한 글</span>
            </ActiveLi>
          </MyArchive>
        </ArchiveBox>
      </ArchiveContainer>
      <Outlet />
    </MyPageWrapper>
  );
}

export default MyPage;

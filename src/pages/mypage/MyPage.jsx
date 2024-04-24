import iconright from '@assets/images/icon-down.svg';
import Button from '@components/button/Button';
import useCustomAxios from '@hooks/useCustomAxios';
import {
  ActiveLi,
  ArchiveBox,
  ArchiveContainer,
  ArchiveHeader,
  LinkContainer,
  MyArchive,
  MyPageSection,
  MyPageWrapper,
  PostArchive,
  RecordDate,
  RecordLi,
  UserProfile,
} from '@pages/mypage/MyPage.style';
import useUserStore from '@zustand/user';
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

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
    setActivity(UserRes.data);
  }

  async function fetchUserRecord() {
    const res = await axios.get(`/posts/users/${user._id}?type=meditation`);
    setRecord(res.data.item.item);
  }

  const recordList = record?.map(item => (
    <RecordLi
      key={item._id}
      item={item}
      onClick={handleMoveArchive}
      $background={item.extra?.background}
    >
      <RecordDate>{item.createdAt.slice(0, 10)}</RecordDate>
      <p>{item.content}</p>
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
    <MyPageSection>
      <MyPageWrapper>
        <UserProfile>
          <h2>
            <span>{activity?.item.name}님,</span>
            <br />
            안녕하세요
          </h2>
          <img
            src={
              activity?.item.profileImage.startsWith('http://')
                ? activity?.item.profileImage
                : `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${activity?.item.profileImage}`
            }
            alt="내 프로필 이미지"
          />
        </UserProfile>
        <LinkContainer>
          <Link to="/mypage/info">
            <div>
              <Button size="mediumHigh" bgColor="primary">
                내 정보 보기
              </Button>
            </div>
          </Link>
        </LinkContainer>
        <ArchiveContainer>
          <ArchiveHeader>
            <h2>나의 기록</h2>
            <img
              src={iconright}
              alt="더보기 버튼"
              onClick={handleMoveArchive}
            />
          </ArchiveHeader>
          <ArchiveBox>
            <MyArchive>{recordList}</MyArchive>
          </ArchiveBox>
          <ArchiveHeader>
            <h2>나의 활동</h2>
            <img src={iconright} alt="더보기 버튼" onClick={handleMoveMyList} />
          </ArchiveHeader>
          <ArchiveBox>
            <PostArchive>
              <ActiveLi onClick={handleMoveMyList}>
                <h3>{getPosts}</h3>
                <p>내가 쓴 글</p>
              </ActiveLi>
              <hr />
              <ActiveLi onClick={handleMoveMyBookmark}>
                <h3>{activity?.item.bookmark.posts}</h3>
                <p>북마크 한 글</p>
              </ActiveLi>
            </PostArchive>
          </ArchiveBox>
        </ArchiveContainer>
        <Outlet />
      </MyPageWrapper>
    </MyPageSection>
  );
}

export default MyPage;

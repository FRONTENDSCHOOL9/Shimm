import styled from 'styled-components';
import { UserInfo } from '@pages/community/user/UserInfo';
import { Link, useNavigate, useParams } from 'react-router-dom';
import iconbookmark from '@assets/images/icon-bookmark.svg';
import icondefault from '@assets/images/icon-user-default.png';
import { useEffect, useState } from 'react';
import ReplyList from '@pages/community/feed/ReplyList';
import { ReplyCreate, Replyer } from '@pages/community/feed/ReplyCreate';
import FeedDropDown from '@pages/community/feed/FeedDropdown';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/user.mjs';

const replyer = [
  {
    id: 'i`m user2',
    userId: 'replyer_01',
    profileImgUrl: '#',
  },
];

const FeedWrapper = styled.div`
  max-width: 740px;
  width: 100%;
  color: black;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 740px) {
    width: 320px;
    transition: all 5s easi-in-out;
  }
`;

const Post = styled.div`
  margin-block: 20px;
  display: flex;
  flex-wrap: nowrap;
  overflow-wrap: break-word;
`;

const StateWrapper = styled.div`
  display: flex;
  font-size: 1.8rem;
  padding: 0.6rem 0;
  justify-content: space-between;

  & span {
    color: #727272;
    font-size: 1.6rem;
  }

  & img {
    cursor: pointer;
    width: 24px;
  }

  /* & img:isactive {
    background-color: red;
  } */
`;

const ImageArea = styled.div`
  aspect-ratio: 16/9;
  margin-bottom: 1rem;
  background-color: #f0f5ed;
  border-radius: 8px;
`;

const MoreComment = styled.div`
  font-size: 1.6rem;
  padding: 1rem 0;
  color: #727272;
  margin-bottom: 2rem;
`;

function FeedList({ item }) {
  const [comments, setNewComment] = useState([]);
  const { _id, name, profile, content, createdAt } = item;
  const navigate = useNavigate();
  const { id } = useParams();
  const axios = useCustomAxios();

  function handleFeedClick() {
    navigate(`/community/${_id}`);
  }

  function handleAddComment(newComment) {
    setNewComment([...comments, newComment]);
  }
  // console.log(item.user);
  return (
    <FeedWrapper>
      <FeedDropDown item={item} />

      <UserInfo profile={item.user.profile} userId={item.user.name} />

      <div onClick={handleFeedClick}>
        <Post>
          <span>{content}</span>
        </Post>
        <img
          src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.extra?.image}`}
        />
      </div>
      <StateWrapper>
        <span>{createdAt}</span>
        <img src={iconbookmark} alt="게시글 좋아요 버튼" />
      </StateWrapper>
      <UserInfo profile={profile} userId={name} comment={comments} />

      <ReplyList feedId={item._id} />
      {replyer &&
        replyer.map(t => (
          <Replyer key={t.id}>
            <ReplyCreate onAddComment={handleAddComment} />
            {/* <img src={iconsend} alt="댓글 등록 버튼" /> */}
          </Replyer>
        ))}
      <MoreComment>
        <Link to={`/community/${item._id}`}>댓글 더보기</Link>
      </MoreComment>
    </FeedWrapper>
  );
}

export { MoreComment, FeedList, FeedWrapper, ImageArea };

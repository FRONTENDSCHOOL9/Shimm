import iconBookMarkActive from '@assets/images/icon-bookmark-active.svg';
import iconBookMark from '@assets/images/icon-bookmark.svg';
import useCustomAxios from '@hooks/useCustomAxios';
import PropTypes from 'prop-types';
import {
  Bookmark,
  More,
  Post,
  PostHeader,
  PostInfo,
  PostMain,
  ProfileImage,
  ReplyMore,
} from '@pages/community/feed/Feed.style';
import FeedDropDown from '@pages/community/feed/dropdown/FeedDropdown';
import ReplyNew from '@pages/community/feed/reply/ReplyNew';
import useUserStore from '@zustand/user';
import { useEffect, useState } from 'react';

function FeedList({ item, handleDelete, handleBookmark }) {
  const [isActive, setIsActive] = useState();
  const [isOpened, setIsOpened] = useState(false);
  const [bookmarkId, setBookmarkId] = useState();
  const { user } = useUserStore();
  const { _id, user: writer, content, createdAt, repliesCount, extra } = item;
  const axios = useCustomAxios();

  const currentDate = Date.now();
  const createdDate = new Date(createdAt).getTime();
  const seconds = Math.floor((currentDate - createdDate) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(hours / 24);

  useEffect(() => {
    if (user) {
      fetchBookmark();
    }
  }, []);

  async function fetchBookmark() {
    try {
      const res = await axios(`/users/${user._id}/bookmarks`);

      if (Object.keys(res.data.item).length > 0) {
        const bookmarkList = res.data.item.post;
        const bookmarkedPostList = res.data.item?.post.map(
          item => item.target_id,
        );

        if (bookmarkedPostList.includes(_id)) {
          const index = bookmarkedPostList.indexOf(_id);
          setBookmarkId(bookmarkList[index]._id);
          setIsActive(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleClick() {
    try {
      if (!isActive) {
        const res = await axios.post(`/bookmarks/post/${_id}`);
        fetchBookmark();
        setIsActive(true);
      } else {
        const res = await axios.delete(`/bookmarks/${bookmarkId}`);
        handleBookmark();
        setIsActive(false);
      }
    } catch (err) {
      console.error(err);
    }
  }

  function handleMore() {
    setIsOpened(!isOpened);
  }

  return (
    <Post>
      <PostHeader>
        <ProfileImage>
          <img
            src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${writer.profile}`}
            alt={`작성자: ${writer.name}`}
          />
        </ProfileImage>
        <PostInfo>
          <h4>{writer.name}</h4>
          <p>
            {days > 0
              ? `${days}일`
              : hours > 0
                ? `${hours}시간`
                : minutes > 0
                  ? `${minutes}분`
                  : seconds > 0
                    ? `${seconds}초`
                    : '0초'}{' '}
            전
          </p>
        </PostInfo>

        {user && user._id !== writer._id && (
          <>
            <Bookmark>
              {isActive ? (
                <button type="button" onClick={handleClick}>
                  <img src={iconBookMarkActive} alt="북마크 저장됨" />
                </button>
              ) : (
                <button type="button" onClick={handleClick}>
                  <img src={iconBookMark} alt="북마크 저장안됨" />
                </button>
              )}
            </Bookmark>
          </>
        )}

        {user && user._id === writer._id && (
          <>
            <More type="button" onClick={handleMore}>
              •••
            </More>
            {isOpened && (
              <FeedDropDown id={_id} handleDelete={() => handleDelete(_id)} />
            )}
          </>
        )}
      </PostHeader>

      <PostMain to={`/community/${_id}`}>
        <p>{content}</p>
        {extra?.image && (
          <img
            src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${extra.image}`}
            alt={`${extra.image}`}
          />
        )}
      </PostMain>

      {user && <ReplyNew user={user} id={_id} />}
      <ReplyMore to={`/community/${_id}`}>
        {repliesCount}개의 댓글 보기
      </ReplyMore>
    </Post>
  );
}

FeedList.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
  handleBookmark: PropTypes.func,
};

export default FeedList;

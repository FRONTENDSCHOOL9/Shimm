import { Post } from '@pages/community/feed/Feed.style';
import iconBookMark from '@assets/images/icon-bookmark.svg';
import iconBookMarkActive from '@assets/images/icon-bookmark-active.svg';
import { useEffect, useState } from 'react';
import ReplyNew from '@pages/community/feed/ReplyNew';
import { Link } from 'react-router-dom';
import useUserStore from '@zustand/user';
import useCustomAxios from '@hooks/useCustomAxios';

function FeedList({ item }) {
  const [isActive, setIsActive] = useState();
  const { user } = useUserStore();
  const { _id, user: writer, content, createdAt, repliesCount, extra } = item;
  const axios = useCustomAxios();

  const currentDate = Date.now();
  console.log(currentDate);
  const createdDate = new Date(createdAt).getTime();
  console.log(createdDate);
  console.log(currentDate - createdDate);
  const seconds = (currentDate - createdDate) / 1000;
  const minutes = Math.floor(seconds % 3600);
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(hours / 24);

  useEffect(() => {
    fetchBookmark();
  }, []);

  async function fetchBookmark() {
    try {
      const res = await axios(`/users/${user._id}/bookmarks`);
      if (res.data.item.post.map(item => item._id).includes(_id)) {
        setIsActive(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleClick() {}

  // async function handleClick() {
  //   try {
  //     if (!isActive) {
  //       const res = await axios.post(`/bookmarks/post/${_id}`);
  //       bookmarkId = res.data.item._id;
  //       setIsActive(true);
  //     } else {
  //       const res = await axios.post(`/bookmarks/post/${bookmarkId}`);
  //       console.log(res);
  //       setIsActive(false);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  return (
    <Post>
      <div>
        <div>
          <img
            src={`${import.meta.env.VITE_API_SERVER}${writer.profile}`}
            alt={`작성자: ${writer.name}`}
          />
        </div>
        <div>
          <h4>{writer.name}</h4>
          <p>
            {days ? `${days}일` : hours > 0 ? `${hours}시간` : `${minutes}분`}{' '}
            전
          </p>
        </div>
        <div>
          {isActive ? (
            <button type="button" onClick={handleClick}>
              <img src={iconBookMarkActive} alt="북마크 저장됨" />
            </button>
          ) : (
            <button type="button" onClick={handleClick}>
              <img src={iconBookMark} alt="북마크 저장하기" />
            </button>
          )}
        </div>
      </div>

      <Link to={`/community/${_id}`}>
        <p>{content}</p>
        {extra?.image && (
          <img
            src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${extra.image}`}
          />
        )}
      </Link>

      {user && <ReplyNew user={user} id={_id} />}
      <Link to={`/community/${_id}`}>{repliesCount}개의 댓글 보기</Link>
    </Post>
  );
}

export default FeedList;

import { Post } from '@pages/community/feed/Feed.style';
import iconBookMark from '@assets/images/icon-bookmark.svg';
import iconBookMarkActive from '@assets/images/icon-bookmark-active.svg';
import { useState } from 'react';
import ReplyNew from '@pages/community/feed/ReplyNew';
import { Link, useNavigate } from 'react-router-dom';

function FeedList({ item }) {
  const [isActive, setIsActive] = useState();
  const navigate = useNavigate();
  const { _id, user: writer, content, createdAt, repliesCount, extra } = item;

  return (
    <Post>
      <div>
        <div>
          <img
            src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${writer.profile}`}
            alt={`작성자: ${writer.name}`}
          />
        </div>
        <div>
          <h4>{writer.name}</h4>
          <p>{createdAt}</p>
        </div>
        <div>
          {isActive ? (
            <button type="button" onClick={() => {}}>
              <img src={iconBookMarkActive} alt="저장됨" />
            </button>
          ) : (
            <button type="button" onClick={() => {}}>
              <img src={iconBookMark} alt="저장하기" />
            </button>
          )}
        </div>
      </div>

      <div>
        <p>{content}</p>
        {extra?.image && (
          <img
            src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${extra.image}`}
          />
        )}
      </div>

      <ReplyNew />
      <Link to={`/community/${_id}`}>{repliesCount}개의 댓글 보기</Link>
    </Post>
  );
}

export default FeedList;

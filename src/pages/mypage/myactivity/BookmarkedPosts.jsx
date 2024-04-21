import Button from '@components/button/Button';
import useCustomAxios from '@hooks/useCustomAxios';
import FeedList from '@pages/community/feed/FeedList';
import useUserStore from '@zustand/user';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const NoPost = styled.div`
  & p {
    margin: 60px auto;
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
  }
`;

function BookmarkedPosts() {
  const [data, setData] = useState();
  const { user } = useUserStore();
  const axios = useCustomAxios();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost();
  }, []);

  async function fetchPost() {
    try {
      const res = await axios(`/users/${user._id}/bookmarks`);

      if (Object.keys(res.data.item).length > 0) {
        const postList = res.data.item.post.map(item => item.target_id);
        const postRes = await axios(`/posts?type=community`);

        let arr = [];
        postRes.data.item.forEach(item => {
          if (postList.includes(item._id)) {
            arr.push(item);
          }
        });

        setData(arr);
      } else {
        setData(null);
      }
    } catch (err) {
      console.error(err);
    }
  }

  function handleBookmark() {
    fetchPost();
  }

  const bookmarkedPostList = data?.map(item => (
    <FeedList key={item._id} item={item} handleBookmark={handleBookmark} />
  ));
  return (
    <>
      {data ? (
        bookmarkedPostList
      ) : (
        <NoPost>
          <p>저장한 글이 없습니다.</p>
          <Button
            size="full"
            bgColor="dark"
            handleClick={() => navigate('/community')}
          >
            게시글 확인하기
          </Button>
        </NoPost>
      )}
    </>
  );
}

export default BookmarkedPosts;

import Button from '@components/button/Button';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
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

function MyPosts() {
  const [data, setData] = useState();
  const { user } = useUserStore();
  const axios = useCustomAxios();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost();
  }, []);

  async function fetchPost() {
    try {
      const res = await axios(`/posts/users/${user._id}?type=community`);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`/posts/${id}`);
      fetchPost();
    } catch (err) {
      console.error(err);
    }
  }

  const myPostList = data?.item?.item?.map(item => (
    <FeedList key={item._id} item={item} handleDelete={handleDelete} />
  ));

  return (
    <>
      {data?.item?.item.length === 0 ? (
        <NoPost>
          <p>작성한 글이 없습니다.</p>
          <Button
            size="full"
            bgColor="dark"
            handleClick={() => navigate('/community/new')}
          >
            글쓰러 가기
          </Button>
        </NoPost>
      ) : (
        myPostList
      )}
    </>
  );
}

export default MyPosts;

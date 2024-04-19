import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useCustomAxios from '@hooks/useCustomAxios';
import FeedCreate from '@pages/community/feed/FeedCreate';
import { FeedList } from '@pages/community/feed/FeedList';

const FeedTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: hidden;
  padding: 2px;
  margin-top: 60px;
`;

function Feed() {
  const [newComment, setNewComment] = useState();
  const [data, setData] = useState();
  const axios = useCustomAxios();

  useEffect(() => {
    fetchList();
  }, []);

  async function fetchList() {
    try {
      const res = await axios('/posts?type=community');
      console.log(res);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const feedList = data?.item?.map(item => (
    <FeedList key={item._id} item={item} />
  ));

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(newComment);
  //   if (newComment.trim() !== '') setNewComment([...newComment, setNewComment]);
  //   setNewComment('');
  // }

  return (
    <FeedTemplateWrapper>
      {feedList}
      <FeedCreate />
    </FeedTemplateWrapper>
  );
}

export default Feed;

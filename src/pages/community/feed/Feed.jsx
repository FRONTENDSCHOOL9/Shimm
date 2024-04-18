import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import FeedCreate from '@pages/community/feed/FeedCreate';
import { FeedList } from '@pages/community/feed/FeedList';
import { FeedDetail } from '@pages/community/feed/FeedDetail';

const FeedTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: hidden;
  padding: 2px;
  margin-top: 60px;
`;

function Feed() {
  const [newComment, setNewComment] = useState([]);
  const axios = useCustomAxios();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchList();
  }, []);

  async function fetchList() {
    try {
      const res = await axios('/posts?type=community');

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
    //  return <FeedDetail res={res} />
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newComment);
    if (newComment.trim() !== '') setNewComment([...newComment, setNewComment]);
    setNewComment('');
  }

  return (
    <FeedTemplateWrapper>
      {data?.item?.map(item => (
        <FeedList key={item._id} item={item} />
      ))}
      <FeedCreate />
    </FeedTemplateWrapper>
  );
}

export default Feed;

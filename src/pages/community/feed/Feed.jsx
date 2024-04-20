import useCustomAxios from '@hooks/useCustomAxios';
import { StyledFeed } from '@pages/community/feed/Feed.style';
import FeedCreate from '@pages/community/feed/create/FeedCreate';
import FeedList from '@pages/community/feed/FeedList';
import { useEffect, useState } from 'react';

function Feed() {
  const [data, setData] = useState();
  const axios = useCustomAxios();

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
  }

  const feedList = data?.item?.map(item => (
    <FeedList key={item._id} item={item} handleDelete={handleDelete} />
  ));

  async function handleDelete(id) {
    try {
      const res = await axios.delete(`/posts/${id}`);
      console.log(res);
      fetchList();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <StyledFeed>
      {feedList}
      <FeedCreate />
    </StyledFeed>
  );
}

export default Feed;

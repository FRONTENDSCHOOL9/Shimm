import useCustomAxios from '@hooks/useCustomAxios.mjs';
import FeedList from '@pages/community/feed/FeedList';
import useUserStore from '@zustand/user';
import { useEffect, useState } from 'react';

function MyPosts() {
  const [data, setData] = useState();
  const { user } = useUserStore();
  const axios = useCustomAxios();

  useEffect(() => {
    fetchPost();
  }, []);

  console.log(user._id);

  async function fetchPost() {
    try {
      const res = await axios(`/posts/users/${user._id}?type=community`);
      setData(res.data);
      console.log(res.data);
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
  return <>{myPostList}</>;
}

export default MyPosts;

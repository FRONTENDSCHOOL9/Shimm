import useCustomAxios from '@hooks/useCustomAxios';
import FeedList from '@pages/community/feed/FeedList';
import useUserStore from '@zustand/user';
import { useEffect, useState } from 'react';

function BookmarkedPosts() {
  const [data, setData] = useState();
  const { user } = useUserStore();
  const axios = useCustomAxios();

  useEffect(() => {
    fetchPost();
  }, []);

  console.log(user._id);

  async function fetchPost() {
    try {
      const res = await axios(`/bookmarks/post?user_id=${user._id}`);
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

  console.log(data);

  const bookmarkedPostList = data?.item?.map(item => (
    <FeedList
      key={item.post._id}
      item={item.post}
      handleDelete={handleDelete}
    />
  ));
  return <>{bookmarkedPostList}</>;
}

export default BookmarkedPosts;

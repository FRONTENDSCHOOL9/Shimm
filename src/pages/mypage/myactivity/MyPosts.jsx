import Button from '@components/button/Button';
import Loading from '@components/loading/Loading';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import FeedList from '@pages/community/feed/FeedList';
import { NoPost } from '@pages/mypage/myactivity/MyActivity.style';
import useUserStore from '@zustand/user';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyPosts() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const { user } = useUserStore();
  const axios = useCustomAxios();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost();
  }, []);

  async function fetchPost() {
    try {
      setIsLoading(true);
      const res = await axios(`/posts/users/${user._id}?type=community`);
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(id) {
    try {
      setIsLoading(true);
      await axios.delete(`/posts/${id}`);
      fetchPost();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  const myPostList = data?.item?.item?.map(item => (
    <FeedList key={item._id} item={item} handleDelete={handleDelete} />
  ));

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : data?.item?.item.length === 0 ? (
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

import Button from '@components/button/Button';
import Loading from '@components/loading/Loading';
import useCustomAxios from '@hooks/useCustomAxios';
import FeedList from '@pages/community/feed/FeedList';
import { NoPost } from '@pages/mypage/myactivity/MyActivity.style';
import useUserStore from '@zustand/user';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookmarkedPosts() {
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
    } finally {
      setIsLoading(false);
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
      {isLoading ? (
        <Loading />
      ) : data ? (
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

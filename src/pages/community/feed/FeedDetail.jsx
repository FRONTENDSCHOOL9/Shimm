import Loading from '@components/loading/Loading';
import useCustomAxios from '@hooks/useCustomAxios';
import { StyledFeed } from '@pages/community/feed/Feed.style';
import PostDetail from '@pages/community/feed/PostDetail';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function FeedDetail() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState('');
  const { id } = useParams();
  const axios = useCustomAxios();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDetail();
  }, []);

  async function fetchDetail() {
    try {
      setIsLoading(true);
      const res = await axios.get(`/posts/${id}`);
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`/posts/${id}`);
      navigate('/community');
    } catch (err) {
      console.error(err);
    }
  }

  const item = data?.item;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        item && (
          <StyledFeed>
            <PostDetail item={item} handleDelete={handleDelete} />
          </StyledFeed>
        )
      )}
    </>
  );
}

export default FeedDetail;

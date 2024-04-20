import { useEffect, useState } from 'react';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useNavigate, useParams } from 'react-router-dom';
import PostDetail from '@pages/community/feed/PostDetail';
import { StyledFeed } from '@pages/community/feed/Feed.style';

function FeedDetail() {
  const [data, setData] = useState('');
  const { id } = useParams();
  const axios = useCustomAxios();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDetail();
  }, []);

  async function fetchDetail() {
    const res = await axios.get(`/posts/${id}`);
    setData(res.data);
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
    <StyledFeed>
      {item && <PostDetail item={item} handleDelete={handleDelete} />}
    </StyledFeed>
  );
}

export default FeedDetail;

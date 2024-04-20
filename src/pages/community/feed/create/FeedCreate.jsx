import { CircleButton } from '@pages/community/feed/create/FeedCreate.style';
import { useNavigate } from 'react-router-dom';

function FeedCreate() {
  const navigate = useNavigate();

  return <CircleButton onClick={() => navigate('/community/new')} />;
}

export default FeedCreate;

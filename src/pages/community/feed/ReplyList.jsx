import ReplyItem from '@pages/community/feed/ReplyItem';
import PropTypes from 'prop-types';

function ReplyList({ item }) {
  const replyList = item.map(item => <ReplyItem key={item._id} item={item} />);

  return <>{replyList}</>;
}

ReplyList.propTypes = {
  item: PropTypes.array.isRequired,
};

export default ReplyList;

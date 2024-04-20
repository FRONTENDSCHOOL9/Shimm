import PropTypes from 'prop-types';
import iconDelete from '@assets/images/icon-delete-post.svg';
import styled from 'styled-components';

const ReplyContainer = styled.div``;
const ReplyHeader = styled.div``;
const ReplyMain = styled.div``;
const ReplyDelete = styled.div``;

function ReplyItem({ item }) {
  const { user, reply, createdAt } = item;

  const currentDate = Date.now();
  const createdDate = new Date(createdAt).getTime();
  const seconds = Math.floor((currentDate - createdDate) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(hours / 24);

  return (
    <ReplyContainer>
      <ReplyHeader>
        <img src={`${import.meta.env.VITE_API_SERVER}${user.profile}`} />
        <p></p>
      </ReplyHeader>
      <ReplyMain>
        <p>{reply}</p>
        <p>
          {days > 0
            ? `${days}일`
            : hours > 0
              ? `${hours}시간`
              : minutes > 0
                ? `${minutes}분`
                : seconds > 0
                  ? `${seconds}초`
                  : '0초'}{' '}
          전
        </p>
      </ReplyMain>
      <ReplyDelete>
        <button type="button" onClick={() => {}}>
          <i>댓글 삭제</i>
          <img src={iconDelete} alt="댓글 삭제" />
        </button>
      </ReplyDelete>
    </ReplyContainer>
  );
}

ReplyItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ReplyItem;

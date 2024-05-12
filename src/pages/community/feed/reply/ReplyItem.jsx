import iconDelete from '@assets/images/icon-delete-post.svg';
import { ProfileImage } from '@pages/community/feed/Feed.style';
import {
  ReplyContainer,
  ReplyDelete,
  ReplyHeader,
  ReplyMain,
  ReplyTime,
} from '@pages/community/feed/reply/Reply.style';
import useModalStore from '@zustand/modal';
import useUserStore from '@zustand/user';
import PropTypes from 'prop-types';

function ReplyItem({ item, handleDelete }) {
  const { user } = useUserStore();
  const { user: writer, reply, createdAt } = item;
  const { setShowModal, setModalData } = useModalStore();

  const currentDate = Date.now();
  const createdDate = new Date(createdAt).getTime();
  const seconds = Math.floor((currentDate - createdDate) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(hours / 24);

  function handleClick() {
    setShowModal(true);
    setModalData({
      children: <span>정말 삭제하시겠습니까?</span>,
      button: 2,
      handleOk() {
        setShowModal(false);
        handleDelete(item._id);
      },
      handleClose() {
        setShowModal(false);
      },
    });
  }

  return (
    <ReplyContainer>
      <ReplyHeader>
        <ProfileImage>
          <img
            src={
              writer.profile.startsWith('http://')
                ? writer.profile
                : `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${writer.profile}`
            }
          />
        </ProfileImage>
        <p>{writer.name}</p>
        <ReplyTime>
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
        </ReplyTime>
      </ReplyHeader>
      <ReplyMain>
        <p>{reply}</p>
        {user && user._id === writer._id && (
          <ReplyDelete>
            <button type="button" onClick={handleClick}>
              <i>댓글 삭제</i>
              <img src={iconDelete} alt="댓글 삭제" />
            </button>
          </ReplyDelete>
        )}
      </ReplyMain>
    </ReplyContainer>
  );
}

ReplyItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default ReplyItem;

import PropTypes from 'prop-types';
import iconDelete from '@assets/images/icon-delete-post.svg';
import useUserStore from '@zustand/user';
import { ProfileImage } from '@pages/community/feed/Feed.style';
import {
  ReplyContainer,
  ReplyDelete,
  ReplyHeader,
  ReplyTime,
  ReplyMain,
} from '@pages/community/feed/reply/Reply.style';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useModalStore from '@zustand/modal.mjs';

function ReplyItem({ item, postId, fetchReply }) {
  const { user } = useUserStore();
  const { _id, user: writer, reply, createdAt } = item;
  const { setShowModal, setModalData } = useModalStore();
  const axios = useCustomAxios();

  const currentDate = Date.now();
  const createdDate = new Date(createdAt).getTime();
  const seconds = Math.floor((currentDate - createdDate) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(hours / 24);

  async function handleDelete() {
    try {
      const res = await axios.delete(`/posts/${postId}/replies/${_id}`);
      console.log(res);
      fetchReply();
    } catch (err) {
      console.error(err);
    }
  }

  function handleClick() {
    setShowModal(true);
    setModalData({
      children: <span>정말 삭제하시겠습니까?</span>,
      button: 2,
      handleOk() {
        setShowModal(false);
        handleDelete();
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
          <img src={`${import.meta.env.VITE_API_SERVER}${writer.profile}`} />
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
        {user._id === writer._id && (
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
  postId: PropTypes.number,
  fetchReply: PropTypes.func,
};

export default ReplyItem;

import useCustomAxios from '@hooks/useCustomAxios';
import { ReplySection } from '@pages/community/feed/reply/Reply.style';
import ReplyItem from '@pages/community/feed/reply/ReplyItem';
import ReplyNew from '@pages/community/feed/reply/ReplyNew';
import useUserStore from '@zustand/user';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function ReplyList({ id, pid }) {
  const axios = useCustomAxios();
  const [data, setData] = useState();
  const { user } = useUserStore();

  useEffect(() => {
    fetchReply();
  }, []);

  async function fetchReply() {
    try {
      const res = await axios(`/posts/${id}/replies/?sort={"createdAt": -1}`);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  }
  const replyList = data?.item?.map((item, index) => (
    <ReplyItem key={index} item={item} fetchReply={fetchReply} postId={id} />
  ));

  return (
    <ReplySection>
      {replyList}
      {user && (
        <ReplyNew user={user} id={id} pid={pid} handleNew={fetchReply} />
      )}
    </ReplySection>
  );
}

ReplyList.propTypes = {
  id: PropTypes.number.isRequired,
  pid: PropTypes.number,
};

export default ReplyList;

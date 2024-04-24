import iconSend from '@assets/images/icon-send.svg';
import useCustomAxios from '@hooks/useCustomAxios';
import {
  ProfileImage,
  Reply,
  ReplyInput,
  ReplyMain,
} from '@pages/community/feed/Feed.style';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function ReplyNew({ user, id, pid }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const res = await axios(`/users/${user._id}`);
    setData(res.data);
  }

  const queryClient = useQueryClient();
  const addReply = useMutation({
    mutationFn: formData => axios.post(`/posts/${id}/replies`, formData),
    onSuccess() {
      queryClient.invalidateQueries(['replies']);
      reset();
    },
  });

  function onSubmit(formData) {
    addReply.mutate(formData);
    if (!pid) {
      navigate(`/community/${id}`);
    }
  }

  const item = data?.item;

  return (
    <Reply>
      <ProfileImage>
        <img
          src={
            item?.profileImage.startsWith('http://')
              ? item?.profileImage
              : `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item?.profileImage}`
          }
          alt="내 프로필 이미지"
        />
      </ProfileImage>
      <ReplyMain onSubmit={handleSubmit(onSubmit)}>
        <div>
          <ReplyInput
            id="reply"
            title="reply"
            placeholder="댓글을 작성하세요."
            {...register('reply', {
              required: '댓글을 입력하세요.',
            })}
          />
          {errors.reply && <p>{errors.reply.message}</p>}
        </div>
        <button type="submit">
          <i>댓글 달기</i>
          <img src={iconSend} alt="댓글 달기" />
        </button>
      </ReplyMain>
    </Reply>
  );
}

ReplyNew.propTypes = {
  user: PropTypes.object,
  id: PropTypes.number.isRequired,
  pid: PropTypes.number,
};

export default ReplyNew;

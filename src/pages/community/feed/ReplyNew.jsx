import Input from '@components/input/Input';
import { useForm } from 'react-hook-form';
import iconSend from '@assets/images/icon-send.svg';
import PropTypes from 'prop-types';
import useCustomAxios from '@hooks/useCustomAxios';
import { useNavigate } from 'react-router-dom';

function ReplyNew({ user, id }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axios = useCustomAxios();
  const navigate = useNavigate();

  async function onSubmit(formData) {
    try {
      console.log(formData);

      const res = await axios.post(`/posts/${id}/replies`, formData);
      console.log(res);
      navigate(`/community/${id}`);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <img
        src={`${import.meta.env.VITE_API_SERVER}${user.profile}`}
        alt="내 프로필 이미지"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
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
      </form>
    </div>
  );
}

ReplyNew.propTypes = {
  user: PropTypes.object,
  id: PropTypes.number.isRequired,
};

export default ReplyNew;

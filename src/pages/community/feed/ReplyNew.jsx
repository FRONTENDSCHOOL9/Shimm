import Input from '@components/input/Input';
import { useForm } from 'react-hook-form';
import iconSend from '@assets/images/icon-send.svg';

function ReplyNew() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(formData) {
    try {
      console.log(formData);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <img src="" alt="내 프로필 이미지" />
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

export default ReplyNew;

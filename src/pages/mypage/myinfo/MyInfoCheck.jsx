import Button from '@components/button/Button';
import Input from '@components/input/Input';
import Loading from '@components/loading/Loading';
import useCustomAxios from '@hooks/useCustomAxios';
import {
  Check,
  CheckWrapper,
  StyledLabel,
} from '@pages/mypage/myinfo/MyInfo.style';
import useModalStore from '@zustand/modal';
import useUserStore from '@zustand/user';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function MyInfoCheck() {
  const { user } = useUserStore();
  const { setShowModal, setModalData } = useModalStore();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({});
  const axios = useCustomAxios();
  const navigate = useNavigate();

  async function onSubmit(formData) {
    try {
      setIsLoading(true);
      formData.email = user.email;
      const res = await axios.post('/users/login', formData);
      navigate('/mypage/editprofile');
    } catch (err) {
      console.error(err);
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach(error =>
          setError(error.path, { message: error.msg }),
        );
      } else if (err.response?.data.message) {
        setShowModal(true);
        setModalData({
          children: <span>비밀번호가 일치하지 않습니다!</span>,
          button: 1,
          handleOk() {
            reset();
            setShowModal(false);
          },
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <CheckWrapper>
          <Check>
            <span>
              본인 인증을 위해 비밀번호 확인이 필요합니다.
              <br />
              비밀번호를 입력해 주세요.
            </span>
            <form onSubmit={handleSubmit(onSubmit)}>
              <StyledLabel htmlFor="password">비밀번호 입력</StyledLabel>
              <Input
                type="password"
                id="password"
                placeholder="소문자, 대문자, 특수문자를 조합하여 8글자 이상 입력해 주세요."
                {...register('password', {
                  required: '비밀번호를 입력하세요.',
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: '비밀번호 형식에 맞게 입력해 주세요.',
                  },
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
              <Button type="submit" size="full">
                다음 단계
              </Button>
            </form>
          </Check>
        </CheckWrapper>
      )}
    </>
  );
}

export default MyInfoCheck;

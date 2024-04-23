import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import useCustomAxios from '@hooks/useCustomAxios';
import useUserStore from '@zustand/user';
import Button from '@components/button/Button';
import Loading from '@components/loading/Loading';
import SocialKakao from '@components/socialLogin/SocialKakao';
import Input from '@components/input/Input';
import {
  LoginWrapper,
  LoginTitle,
  InputLabel,
  ErrorMessge,
  Line,
} from '@pages/users/Login.style';

function Login() {
  const { setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    values: {
      email: 'kiho@test.com',
      password: '11111111',
    },
  });

  async function onSubmit(formData) {
    try {
      setIsLoading(true);
      const res = await axios.post('/users/login', formData);
      setUser({
        _id: res.data.item._id,
        name: res.data.item.name,
        email: res.data.item.email,
        type: res.data.item.type,
        phone: res.data.item.phone,
        profile: res.data.item.profileImage,
        token: res.data.item.token,
      });

      navigate(location.state?.from ? location.state?.from : '/');
    } catch (err) {
      console.error(err);
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach(error =>
          setError(error.path, { message: error.msg }),
        );
      } else if (err.response?.data.message) {
        alert(err.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleSignUp() {
    navigate('/signup');
  }

  return (
    <LoginWrapper>
      <LoginTitle>로그인</LoginTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputLabel htmlFor="email">이메일</InputLabel>
          <Input
            type="email"
            id="email"
            placeholder="이메일을 입력해 주세요."
            {...register('email', {
              required: '이메일을 입력해 주세요.',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: '이메일 형식이 아닙니다.',
              },
            })}
          />
          {errors.email && <ErrorMessge>{errors.email.message}</ErrorMessge>}
        </div>

        <div>
          <InputLabel htmlFor="password">비밀번호</InputLabel>
          <Input
            type="password"
            id="password"
            placeholder="비밀번호를 입력해 주세요."
            {...register('password', {
              required: '비밀번호를 입력해 주세요.',
            })}
          />
          {errors.password && (
            <ErrorMessge>{errors.password.message}</ErrorMessge>
          )}
        </div>

        <Button type="submit" size="full" bgColor="dark">
          로그인
        </Button>
      </form>

      <Line>
        <p>또는</p>
      </Line>

      <div>
        <SocialKakao />
        <Button
          size="full"
          bgColor="dark"
          display="block"
          handleClick={handleSignUp}
        >
          이메일로 회원가입
        </Button>
      </div>

      {isLoading && <Loading />}
    </LoginWrapper>
  );
}

export default Login;

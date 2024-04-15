import Button from '@components/button/Button';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/user.mjs';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactCsspin } from 'react-csspin';
import 'react-csspin/dist/style.css';
import { useState } from 'react';

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
  } = useForm();

  async function onSubmit(formData) {
    try {
      setIsLoading(true);
      const res = await axios.post('/users/login', formData);
      setUser({
        _id: res.data.item._id,
        name: res.data.item.name,
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

  return (
    <div>
      <h3>로그인</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            placeholder="이메일을 입력하세요"
            {...register('email', {
              required: '이메일을 입력하세요.',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: '이메일 형식이 아닙니다.',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
            {...register('password', {
              required: '비밀번호를 입력하세요.',
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <Button type="submit" size="full" bgColor="primary">
          로그인
        </Button>
      </form>

      {isLoading && <ReactCsspin />}
    </div>
  );
}

export default Login;

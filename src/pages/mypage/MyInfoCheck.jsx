import Button from '@components/button/Button';
import Input from '@components/input/Input';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/user.mjs';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CheckWrapper = styled.div`
  padding: 20px;
  max-width: 450px;
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  margin: 0 auto;
`;

const Check = styled.div`
  margin-top: 192px;
  display: flex;
  flex-direction: column;

  & span {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.6;
  }

  & #password {
    height: 40px;
    margin-bottom: 40px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
  }

  & p {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
`;

const StyledLabel = styled.label`
  margin-top: 62px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-weight: 200;
  margin-bottom: 14px;

  & input {
  }
`;

const NextButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #55a25a;
  border-radius: 25px;
  text-align: center;
  color: white;
  font-size: 1.4rem;
  font-weight: 200;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #335633;
  }
`;

function MyInfoCheck() {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const { user } = useUserStore();
  const axios = useCustomAxios();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({});

  const location = useLocation();

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
        // 모달로 변경
        alert('비밀번호가 일치하지 않습니다.');
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
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
  );
}

export default MyInfoCheck;

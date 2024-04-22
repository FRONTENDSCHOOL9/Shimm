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
`;

const StyledLabel = styled.label`
  margin-top: 62px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  & span {
    font-size: 1.4rem;
    font-weight: 200;
    margin-bottom: 14px;
  }

  & input {
    height: 40px;
    margin-bottom: 64px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
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
  } = useForm({
    values: {
      email: user.email,
    },
  });

  const location = useLocation();

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
      navigate('/mypage/editprofile');
    } catch (err) {
      console.error(err);
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach(error =>
          setError(error.path, { message: error.msg }),
        );
      } else if (err.response?.data.message) {
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
        <StyledLabel htmlFor="password">
          <span>비밀번호 입력</span>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: (
                <span className="required">
                  '정확한 비밀번호를 입력하세요.'
                </span>
              ),
              minLength: {
                value: 8,
                message: '비밀번호는 8글자 이상입니다.',
              },
            })}
          />
        </StyledLabel>
        {errors.checkpassword && <p>{errors.checkpassword.message}</p>}
        <NextButton type="submit" onClick={handleSubmit(onSubmit)}>
          다음 단계
        </NextButton>
      </Check>
    </CheckWrapper>
  );
}

export default MyInfoCheck;

import {
  SubmitButton,
  UploadCase,
  UploadFile,
  WriteTextarea,
} from '@pages/community/feed/FeedNew';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import iconfile from '@assets/images/icon-file.svg';
import { ImageArea } from '@pages/community/feed/FeedList';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const EditWrapper = styled.div`
  max-width: 740px;
  width: 100%;
  color: black;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 740px) {
    width: 320px;
    transition: all 5s easi-in-out;
  }
`;

const UploadedImg = styled.img`
  aspect-ratio: 16/9;
`;

const Edit = styled.div`
  width: 100%;
  box-shadow: inset 0 0 20px red;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;

  & h1 {
    margin: 30px;
    font-size: 2.2rem;
    font-weight: 500;
  }
`;

function FeedEdit() {
  const axios = useCustomAxios();
  const [item, setItem] = useState();
  const { _id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  async function fetchEditDetail() {
    const response = await axios.patch(`/posts/${_id}`);
    setItem(response.data.item);
  }

  useEffect(() => {
    fetchEditDetail();
  }, []);

  useEffect(() => {
    if (item)
      reset({
        content: item.content,
      });
  }, [item]);

  async function onSubmit(formData) {
    try {
      await axios.patch(`/posts/${_id}`, formData);
      alert('내용이 수정되었습니다.');
      navigate(`/community/${_id}`);
    } catch (err) {
      console.error(err);
      alert('할일 수정에 실패했습니다.');
    }
  }

  return (
    <EditWrapper>
      <Edit>
        <h1>수정하기</h1>
        <UploadCase>
          가로 500px, 세로 500px 이상의 이미지를 등록해 주세요.
        </UploadCase>
        <UploadedImg />
      </Edit>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <WriteTextarea
            {...register('content', {
              required: '내용을 입력하세요.',
            })}
          />
          <button type="submit">수정하기</button>
        </form>
      </div>
      <UploadFile>
        <img src={iconfile} alt="이미지 첨부하기" />
        <span>이미지 첨부</span>
      </UploadFile>
    </EditWrapper>
  );
}

export default FeedEdit;

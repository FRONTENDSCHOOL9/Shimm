import React, { useState } from 'react';
import styled from 'styled-components';
import iconfile from '@assets/images/icon-file.svg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ErrorStyled } from '@pages/community/ErrorStyled';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { Button } from '@mui/material';
import { CommonButton } from '@components/button/Button.style';

const FeedWrite = styled.div`
  width: 100%;
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

const FeedNewWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadFile = styled.div`
  min-width: 300px;
  width: 100%;
  display: flex;
  gap: 10px;
  font-size: 1.4rem;
  line-height: 1.4;
  margin-bottom: 10px;
  justify-content: flex-start;
  flex-direction: column;

  & img {
    vertical-align: top;
    width: 24px;
    margin-right: 8px;
  }

  & span {
    flex-grow: 1;
    width: 80px;
  }

  & input[type='file'] {
    width: 280px;
    height: 30px;
    background: #fff;
    border: 1px solid rgb(77, 77, 77);
    border-radius: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 740px) {
    width: 320px;
    transition: all 5s easi-in-out;
  }
`;

const UploadCase = styled.div`
  font-size: 1.4rem;
  color: #335635;
  line-height: 1.6;
  margin-bottom: 1.3rem;
`;

const WriteTextarea = styled.textarea`
  width: 100%;
  max-width: 530px;
  height: 180px;
  border: 1px solid black;
  border-radius: 0.5rem;
  resize: none;
  margin-bottom: 3.4rem;

  @media screen and (max-width: 740px) {
    width: 320px;
    transition: all 5s easi-in-out;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const SubmitButton = styled.button`
  color: white;
  font-size: 1.4rem;
  text-align: center;
  margin: 0 auto;
  width: 150px;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 25px;
  background-color: #55a25a;
`;

const CancelButton = styled.button`
  color: white;
  font-size: 1.4rem;
  text-align: center;
  margin: 0 auto;
  width: 150px;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 25px;
  background-color: #858a85;
`;

function FeedNew() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const axios = useCustomAxios();

  async function onSubmit(data) {
    try {
      data.type = 'community';
      // 이미지 먼저 업로드
      if (data.image.length > 0) {
        // 프로필 이미지를 추가한 경우
        const imageFormData = new FormData();
        imageFormData.append('attach', data.image[0]);

        const fileRes = await axios('/files', {
          method: 'post',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          data: imageFormData,
        });
        data.extra = {
          image: fileRes.data.item[0].name,
        };
        delete data.image;
      } else {
        delete data.image;
      }

      const res = await axios.post(`/posts`, data);
      console.log(res.data);
      navigate(`/community`);
    } catch (err) {
      console.error(err);
    }
  }

  function handleTextareaChange(e) {
    setContent(e.target.value);
  }

  // function handleEnter(e) {
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //     handleSubmit(onSubmit)();
  //   }
  // }

  function handleUploadFile(e) {
    setFile(e.target.files[0]);
  }

  return (
    <FeedWrite>
      <h1>새 글 쓰기</h1>
      <FeedNewWrapper onSubmit={handleSubmit(onSubmit)}>
        <WriteTextarea
          id="content"
          value={content}
          placeholder="무슨일이 일어나고 있나요?"
          {...register('content', {
            required: '내용을 입력해주세요.',
            minLength: {
              value: 1,
              message: '한글자 이상 입력해주세요.',
            },
          })}
          onChange={handleTextareaChange}
        />
        <UploadFile>
          <div>
            <img src={iconfile} alt="이미지 첨부하기" />

            <label htmlFor="image">사진 첨부하기</label>
          </div>
          <input
            {...register('image')}
            id="image"
            type="file"
            accept="image/*"
            onChange={handleUploadFile}
          />
          <UploadCase>
            <span>
              이미지 첨부를 원하시면 파일을 선택해 주세요. 가로 500, 세로 500
              이상의 이미지만 등록 가능합니다.
            </span>
          </UploadCase>
        </UploadFile>

        {errors.content && <ErrorStyled>{errors.content.message}</ErrorStyled>}
        <ButtonWrapper>
          <CancelButton onClick={() => navigate('/community')}>
            취소
          </CancelButton>
          <SubmitButton type="submit">등록</SubmitButton>
        </ButtonWrapper>
      </FeedNewWrapper>
    </FeedWrite>
  );
}

export { FeedNew, UploadCase, UploadFile, WriteTextarea, SubmitButton };

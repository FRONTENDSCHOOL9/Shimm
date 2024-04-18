import React, { useState } from 'react';
import styled from 'styled-components';
import iconfile from '@assets/images/icon-file.svg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ErrorStyled } from '@pages/community/ErrorStyled';
import useCustomAxios from '@hooks/useCustomAxios.mjs';

const FeedWrite = styled.div`
  width: 100%;
  box-shadow: inset 0 0 20px red;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  box-sizing: border-box;

  & h1 {
    margin: 3rem;
    font-size: 2.2rem;
    font-weight: 500;
  }
`;

const UploadFile = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.4rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  margin-right: 220px;

  & img {
    vertical-align: top;
    width: 2rem;
  }

  & span {
    flex-grow: 1;
    width: 80px;
  }
`;

const UploadCase = styled.span`
  font-size: 1.4rem;
  color: #335635;
  line-height: 1.6;
  margin-bottom: 1.3rem;
`;

const WriteTextarea = styled.textarea`
  width: 32rem;
  height: 20rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  resize: none;
  margin-bottom: 3.4rem;
`;

const SubmitButton = styled.button`
  color: white;
  font-size: 1.4rem;
  text-align: center;
  margin: 0 auto;
  width: 120px;
  height: 40px;
  padding: 10px;
  border-radius: 20px;
  background-color: #eeb056;
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
            // 파일 업로드시 필요한 설정
            'Content-Type': 'multipart/form-data',
          },
          data: imageFormData,
        });

        // 서버로부터 응답받은 이미지 이름을 회원 정보에 포함
        data.image = fileRes.data.item[0].name;
      } else {
        // profileImage 속성을 제거
        delete data.image;
      }

      const res = await axios.post(`/posts`, data);
      console.log(res.data);
      // navigate(`/community`);
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
      <h1>글쓰기</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <UploadFile>
            <img src={iconfile} alt="이미지 첨부하기" />
            <input
              {...register('image')}
              type="file"
              accept="image/*"
              onChange={handleUploadFile}
            />
            <span>이미지 첨부</span>
          </UploadFile>
          <UploadCase>
            가로 500px, 세로 500px 이상의 이미지를 등록해 주세요.
          </UploadCase>
        </div>

        <WriteTextarea
          id="content"
          value={content}
          placeholder="글 내용을 입력해주세요."
          {...register('content', {
            required: '내용을 입력해주세요.',
            minLength: {
              value: 1,
              message: '한글자 이상 입력해주세요.',
            },
          })}
          onChange={handleTextareaChange}
        />
        {errors.content && <ErrorStyled>{errors.content.message}</ErrorStyled>}
        <SubmitButton type="submit">등록하기</SubmitButton>
      </form>
    </FeedWrite>
  );
}

export { FeedNew, UploadCase, UploadFile, WriteTextarea, SubmitButton };

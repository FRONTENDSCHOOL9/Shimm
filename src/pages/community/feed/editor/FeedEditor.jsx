import { useState } from 'react';
import { useForm } from 'react-hook-form';
import iconImage from '@assets/images/icon-file.svg';
import styled from 'styled-components';

const FeedForm = styled.form``;

const TextContent = styled.div`
  border: 2px solid #e6f2e7;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  & textarea {
    aspect-ratio: 5/3;
    width: 100%;
    background-color: #fafafa;
    border-radius: 5px;
    box-shadow: inset 0 0 0 1px #55a25a;
    padding: 10px;
    font-size: 1.4rem;
    font-weight: 300;
    color: #545956;
  }
`;

const FileContent = styled.div``;

function FeedEditor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [value, setValue] = useState();

  function onSubmit() {}

  return (
    <FeedForm onSubmit={handleSubmit(onSubmit)}>
      <TextContent>
        <textarea
          id="content"
          title="content"
          placeholder="무슨 일이 일어나고 있나요?"
          value={value && '바보'}
          {...register('content', {
            required: '내용을 입력해주세요.',
            minLength: {
              value: 1,
              message: '한 글자 이상 입력해주세요.',
            },
          })}
        />
        {errors.content && <p>{errors.content.message}</p>}
      </TextContent>
      <FileContent>
        <div>
          <img src={iconImage} alt="사진 첨부" />
          <p>사진 첨부하기</p>
        </div>
        <div>
          <label htmlFor="image"></label>
          <input
            type="file"
            id="image"
            name="profile-img"
            accept=".png, .jpeg, .jpg"
          />
        </div>
      </FileContent>
    </FeedForm>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <ContentArea
    //     id="content"
    //     title="content"
    //     value={content}
    //     placeholder="무슨 일이 일어나고 있나요?"
    //     {...register('content', {
    //       required: '내용을 입력해주세요.',
    //       minLength: {
    //         value: 1,
    //         message: '한 글자 이상 입력해주세요.',
    //       },
    //     })}
    //     onChange={handleTextareaChange}
    //   />
    //   <UploadFile>
    //     <div>
    //       <img src={iconfile} alt="이미지 첨부하기" />

    //       <label htmlFor="image">사진 첨부하기</label>
    //     </div>
    //     <input
    //       {...register('image')}
    //       id="image"
    //       type="file"
    //       accept="image/*"
    //       onChange={handleUploadFile}
    //     />
    //     <UploadCase>
    //       <span>
    //         이미지 첨부를 원하시면 파일을 선택해 주세요. 가로 500, 세로 500
    //         이상의 이미지만 등록 가능합니다.
    //       </span>
    //     </UploadCase>
    //   </UploadFile>

    //   {errors.content && <ErrorStyled>{errors.content.message}</ErrorStyled>}
    //   <ButtonWrapper>
    //     <CancelButton onClick={() => navigate('/community')}>취소</CancelButton>
    //     <SubmitButton type="submit">등록</SubmitButton>
    //   </ButtonWrapper>
    // </form>
  );
}

export default FeedEditor;

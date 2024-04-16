import {
  SubmitButton,
  UploadCase,
  UploadFile,
  WriteTextarea,
} from '@pages/community/feed/FeedNew';
import React from 'react';
import styled from 'styled-components';
import iconfile from '@assets/images/icon-file.svg';
import { ImageArea } from '@pages/community/feed/FeedList';


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
  background-color: F0F5ED;
`;

const Edit = styled.div`
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

function FeedEdit() {
  return (
    <EditWrapper>
      <Edit>
        <h1>수정하기</h1>
        <UploadFile>
          <img src={iconfile} alt="이미지 첨부하기" />
          <span>이미지 첨부</span>
        </UploadFile>
        <UploadCase>
          가로 500px, 세로 500px 이상의 이미지를 등록해 주세요.
        </UploadCase>
        <UploadedImg />
      </Edit>
      <ImageArea />
      <WriteTextarea></WriteTextarea>
      <SubmitButton>수정하기</SubmitButton>
    </EditWrapper>
  );
}

export default FeedEdit;

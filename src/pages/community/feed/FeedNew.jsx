import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ErrorStyled } from '@pages/community/ErrorStyled';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { Button } from '@mui/material';
import { CommonButton } from '@components/button/Button.style';
import FeedEditor from '@pages/community/feed/editor/FeedEditor';
import useUserStore from '@zustand/user.mjs';

const FeedWrite = styled.div`
  box-shadow: inset 0 0 5px red;
  width: 100%;
  margin: 0 auto;

  flex-grow: 1;
  padding: 30px;

  & h3 {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 35px;
  }

  @media (min-width: 740px) {
    max-width: 500px;

    & h3 {
      font-size: 2.4rem;
      margin-bottom: 30px;
    }
  }
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 30px;

  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    aspect-ratio: 1/1;
  }
`;

function FeedNew() {
  const { user } = useUserStore();

  return (
    <FeedWrite>
      <h3>새 글 쓰기</h3>
      {user && (
        <ProfileImage>
          <img src={`${import.meta.env.VITE_API_SERVER}${user.profile}`} />
        </ProfileImage>
      )}
      <FeedEditor />
    </FeedWrite>
  );
}

export default FeedNew;

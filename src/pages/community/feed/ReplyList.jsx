import { UserInfo } from '@pages/community/user/UserInfo';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledReplies = styled.div`
  box-shadow: inset 0 0 20px rebeccapurple;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.2rem;

  & img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: inset 0 0 20px #335635;
  }
`;

function ReplyList({ comments, profileImg, userId }) {
  const commentsList = comments || [];

  return (
    <div>
      {commentsList.map((comment, index) => (
        <StyledReplies key={index}>
          <img src={profileImg} alt="#" />
          <span>{userId && userId }</span>
          <p>{comment.text}</p>
        </StyledReplies>
      ))}
    </div>
  );
}

export default ReplyList;

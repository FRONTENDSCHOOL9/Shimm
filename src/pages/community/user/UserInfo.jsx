import { SpaRounded } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
`;

function UserInfo({ profile, userId, comment }) {
  return (
    <UserContainer>
      <img
        src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${profile}`}
        alt="#"
      />
      <div>
        <p>{userId}</p>
        {comment && <span>{comment.text}</span>}
      </div>
    </UserContainer>
  );
}

export { UserInfo, UserContainer };

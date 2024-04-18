import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: inset 0 0 20px #335635;
  }
`;

function UserInfo({ profile, userId, comment }) {
  console.log();

  return (
    <UserContainer>
      <img
        src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${profile}`}
        alt="#"
      />
      <span>{userId}</span>
      {comment && <span>{comment}</span>}
    </UserContainer>
  );
}

export { UserInfo, UserContainer };

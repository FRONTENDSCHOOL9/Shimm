import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { UserInfo } from '@pages/community/user/UserInfo';
import useUserStore from '@zustand/user.mjs';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledReplies = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;

  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

function ReplyList({ comments, profileImg, userId }) {
  const commentsList = comments || [];
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const { _id } = useParams();
  console.log(_id);
  console.log(user);
  // useEffect(() => {
  //   fetchReply();
  // }, []);
  // async function fetchReply() {
  //   const res = await axios.post(`/posts/${_id}/replies`);

  //   console.log(res.data);
  //   console.log(commentsList);
  // }
  return (
    <div>
      {commentsList.map((comment, index) => (
        <StyledReplies key={index}>
          <img
            src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${user?.profile}`}
            alt="댓글작성한 사용자의 사진"
          />
          <span>{user.name}</span>
          <p>{comment.text}</p>
        </StyledReplies>
      ))}
    </div>
  );
}

export default ReplyList;

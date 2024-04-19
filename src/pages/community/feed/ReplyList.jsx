import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { UserInfo } from '@pages/community/user/UserInfo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useUserStore from '@zustand/user';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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

function ReplyList({ feedId }) {
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const [commentList, setCommentList] = useState();

  useEffect(() => {
    fetchReply();
  }, []);

  async function fetchReply() {
    const res = await axios.get(`/posts/${feedId}/replies`);
    setCommentList(res.data);
  }

  return (
    <div>
      <StyledReplies>
        <img
          src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${user?.profile}`}
          alt="댓글작성한 사용자의 사진"
        />
        <span>{user?.name}</span>
        {/* <p>{content}</p> */}
      </StyledReplies>
    </div>
  );
}

export default ReplyList;

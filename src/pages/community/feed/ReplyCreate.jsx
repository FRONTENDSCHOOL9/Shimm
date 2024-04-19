import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorStyled } from '@pages/community/ErrorStyled';
import iconsend from '@assets/images/icon-send.svg';
import useUserStore from '@zustand/user.mjs';
import { useParams } from 'react-router-dom';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const ReplyWrapper = styled.form`
  width: 100%;
`;

const Replyer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-block: 10px;
  box-sizing: border-box;
  position: relative;
  align-content: stretch;

  & img:first-child {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    flex-shrink: 0;
  }

  & img:last-child {
    cursor: pointer;
    width: 3rem;
    right: 3rem;
  }

  & textarea {
    width: 100%;
    height: 3rem;
    padding: 0 1.6rem;
    box-sizing: border-box;
    line-height: 3rem;
    border-radius: 6px;
    outline: none;
    resize: none;
    overflow: hidden;
    flex-grow: 1;
  }
`;

function ReplyCreate({ feedId }) {
  const { user } = useUserStore();

  const axios = useCustomAxios();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const addReply = useMutation({
    mutitionFn: formData => axios.post(`/posts/${feedId}/replies`, formData),
    onSuccess() {
      queryClient.invalidateQueries(['posts', _id, 'replies']);
      reset();
    },
  });
  const onSubmit = async formData => {
    addReply.mutate(formData);
  };

  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm();
  // const { _id } = useParams();
  // const axios = useCustomAxios();

  // async function onSubmit(formData) {
  //   const { comment } = formData;
  //   if (comment.trim() !== '') {
  //     const newCommentObj = {
  //       no: Date.now() /*임시*/,
  //       text: comment.trim(),
  //     };

  //     await axios.post(`/posts/${_id}/replies`, content);
  //     onAddComment(newCommentObj);
  //     reset();
  //   }
  // }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  }

  return (
    <ReplyWrapper onSubmit={handleSubmit(onSubmit)}>
      <Replyer>
        {
          <img
            src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${user?.profile}`}
            alt="댓글 작성자의 프로필 사진"
          />
        }
        <textarea
          {...register('content', {
            minLength: {
              required: '댓글을 입력해주세요.',
              value: 2,
              message: '두글자 이상 입력하세요.',
            },
          })}
          onKeyUp={handleEnter}
        />
        <img
          src={iconsend}
          alt="댓글 등록 버튼"
          onClick={handleSubmit(onSubmit)}
        />
      </Replyer>
      {errors.comment && <ErrorStyled>{errors.comment.message}</ErrorStyled>}
    </ReplyWrapper>
  );
}

export { ReplyCreate, Replyer };

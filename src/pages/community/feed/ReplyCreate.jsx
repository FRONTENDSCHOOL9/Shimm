import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorStyled } from '@pages/community/ErrorStyled';
import iconsend from '@assets/icon-send.svg'

const Replyer = styled.div`
    display: flex; 
    width: 100%;
    gap: 1.2rem;
    margin-block: 1rem;
    position: relative;
    
    & img:first-child {
        flex-shrink: 0;
        width: 3rem;
        height: 3rem;
        box-shadow: inset 0 0 20px #335635;
        border-radius: 50%;
    }

    & img:last-child {
        cursor: pointer;
        width: 2rem;
        right: 2rem;
    }

    & textarea {
        width: 100%;
        flex-shrink: 0;
        height: 3rem;
        box-sizing: border-box;
        padding: 0 1.6rem;
        line-height: 3rem;
        border-radius: 6px;
        outline: none;
        resize: none;
        overflow: hidden;
        flex-grow: 1;
    }
`

function ReplyCreate({ onAddComment, item }) {;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [ comment, setComment ] = useState('');

 
    function onSubmit(formData){
        const { comment } = formData;
        if(comment.trim() !== ''){
            const newCommentObj = {
                no: Date.now(), /*임시*/
                text: comment.trim(),
            }
        onAddComment(newCommentObj)
        reset();
        }
    }

    function handleEnter(e){
        if(e.key === 'Enter'){
            e.preventDefault();
            handleSubmit(onSubmit)();
        }
    }

  return (
          
            <form onSubmit={ handleSubmit(onSubmit) }>
                <Replyer>
                    <img src="" alt="#"/>
                    <textarea { ...register('comment',
                    {minLength: {
                        required: '댓글을 입력해주세요.',
                        value: 2,
                        message: '두글자 이상 입력하세요.'
                    }})}
                    onKeyUp={handleEnter} />
                    <img src={iconsend} alt="댓글 등록 버튼" />
                </Replyer>
                {errors.comment && <ErrorStyled>
                    {errors.comment.message}
                </ErrorStyled>}
            </form>
          
  )
}

export { ReplyCreate, Replyer };
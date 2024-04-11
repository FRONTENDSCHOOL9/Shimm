import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'



const Replyer = styled.div`
    display: flex;
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
        position: absolute;
        width: 2rem;
        right: 2rem;
        top: 5.6rem;
    }
    `

const ErrorStyled = {
    color: 'orangered',
    fontSize: '1.2rem',
    fontWeight: 'bold'
}

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
                    onKeyDown={handleEnter} />
                    <br />
                    {errors.comment && <span style={ErrorStyled}>{errors.comment.message}</span>}
                   
                </Replyer>
            </form>
        
  )
}

export default ReplyCreate
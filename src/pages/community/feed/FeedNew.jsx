import React from 'react'
import styled from 'styled-components';
import iconfile from '@assets/icon-file.svg'
import { useForm } from 'react-hook-form';

const FeedWrite = styled.div`
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
        font-weight: bold; 
    } 
`  

const UploadFile = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1.4rem;
    line-height: 1.4;
    margin-bottom: 1rem;
    margin-right: 220px;
    & img {
        vertical-align: top;
        width: 2rem;
    }

    & span {
        flex-grow:1;
        width: 80px;
    }
`

const UploadCase = styled.span`
    font-size: 1.4rem;
    color: #335635;
    line-height: 1.6;
    margin-bottom: 1.3rem;
`

const WriteTextarea = styled.textarea`
    width: 32rem;
    height: 20rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    resize: none;
    margin-bottom: 3.4rem;
`

const SubmitButton = styled.button`
    color: white;
    font-size: 1.4rem;
    text-align: center;
    margin: 0 auto;
    width: 120px;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    background-color: #EEB056;
`


function FeedNew() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    
    function onSubmit({ children, ...rest}) {
        navigate(`/community`);
        return (
            <button type="submit" {...rest}>{children}
            </button>
        )
    }


     function handleEnter(e){
        if(e.key === 'Enter'){
            e.preventDefault();
            handleSubmit(onSubmit)();
        }
    }

  return (
    <FeedWrite>
        <h1>글쓰기</h1>
        <UploadFile>
            <img src={iconfile} alt="이미지 첨부하기" />
            <span>이미지 첨부</span>
        </UploadFile>
        <UploadCase>가로 500px, 세로 500px 이상의 이미지를 등록해 주세요.
        </UploadCase>
        
        <WriteTextarea onSubmit={handleSubmit(onSubmit)}>
            <textarea id="post"
                      placeholder="글 내용을 입력해주세요." { ...register('post', {
                    minLength: {
                    required: '내용을 입력해주세요.',
                    value: 1,
                    message: '한글자 이상 입력해주세요.'
                }
            })}
            onKeyUp={handleEnter}>
                {errors.post && <ErrorStyle>
                    {errors.post.message} </ErrorStyle>}
            </textarea>
 
        </WriteTextarea>
        <SubmitButton>등록하기</SubmitButton>

    </FeedWrite>
  )
}

export default FeedNew;
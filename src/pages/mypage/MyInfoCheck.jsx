import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CheckWrapper = styled.div`
  padding: 20px;
  max-width: 740px;
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
`

const Check = styled.div`
  margin-top: 192px;
  display: flex;
  flex-direction: column;
  
  & span {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.6;
  }
`

const StyledLabel = styled.label`
  margin-top: 62px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  & span {
    font-size: 1.4rem;
    font-weight: 200;
    margin-bottom: 14px;
  }

  & input {
    height: 40px;
    margin-bottom: 64px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
  }
`

const NextButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #55a25a;
  border-radius: 25px;
  text-align: center;
  color: white;
  font-size: 1.4rem;
  font-weight: 200;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #335633;
  }
`

function MyInfoCheck() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  function onSubmit(){
    console.log('확인validation 후 editprofile 페이지로 이동')
    navigate('/mypage/editprofile')
  }

  return (
    <CheckWrapper>
      <Check>
        <span>
          본인 인증을 위해 비밀번호 확인이 필요합니다.<br/>
          비밀번호를 입력해 주세요.
        </span>
        <StyledLabel htmlFor='checkpassword'>
          <span>비밀번호 입력</span>
          <input type="password"
                 id="checkpassword"
                 { ...register('checkpassword', {
                  required: <span className='required'>'정확한 비밀번호를 입력하세요.'</span>,
                  minLength: {
                    value: 8,
                    message: '비밀번호는 8글자 이상입니다.'
                  }})
                 } />
         
        </StyledLabel>
        {errors.checkpassword && (
          <p>{errors.checkpassword.message}</p>
        )}
          <NextButton type="submit" onClick={handleSubmit(onSubmit)}>
            다음 단계
          </NextButton>
      </Check>
    </CheckWrapper>
  )
}

export default MyInfoCheck
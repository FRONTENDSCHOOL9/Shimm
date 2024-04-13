import React from 'react'
import styled from 'styled-components'
import iconbase from '@assets/icon-login.svg'

const MyPageWrapper = styled.div`
    max-width: 740px;
    width: 100%;
    color: black;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;

   @media screen and (max-width: 740px) {
        width: 320px;
        transition: all 5s easi-in-out;
   } 
`

const UserProfile = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: space-between;
    & img {
        width: 80px;

    }

`
function MyPage() {
  return (
    <MyPageWrapper>
    <UserProfile>
        <h2><b>'닉네임'님,</b> <br />안녕하세요</h2>
        <img src={iconbase} alt="기본프로필 사진" />
    </UserProfile>
    </MyPageWrapper>
  )
}

export default MyPage
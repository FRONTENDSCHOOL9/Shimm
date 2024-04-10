
import styled from 'styled-components'
import { UserInfo } from '@pages/community/user/UserInfo'
import ReplyCreate from '@pages/community/feed/ReplyCreate'
import ReplyList from '@pages/community/feed/ReplyList'
import { MoreComment } from '@pages/community/feed/Feed'
import { useState } from 'react'

const replyer = [
    {
        id: 1,
        userId: 'replyer_01',
        profileImg: '#',
        comment: '사용자 댓글'
    },
]

const ImageArea = styled.div`
   aspect-ratio: 16/9;
   margin-bottom: 1rem;
   background-color: #F0F5ED;
   border-radius: 8px;
`

const Replyer = styled.div`
    display: flex;
    flex-direction: column;
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

    & textarea {
        width: 100%;
        height: 3rem;
        box-sizing: border-box;
        padding: 0 1.6rem;
        line-height: 3rem;
        border-radius: 2rem;
        outline: none;
        resize: none;
        overflow: hidden;
    }
`

function FeedDetail({ item }) {
  const [ comments, setComments ] = useState([]);
  const { profileImg, userId, post } = item;

  function handleAddComment(newComment){
    setComments([...comments, newComment])
  }
  
  return ( 
    <div>
    <UserInfo profileImg={profileImg} userId={userId} />
    <div>{post}</div>
    <ImageArea />
   
    <Replyer>
      <img src={item.profileImg} alt="#" />
      <ReplyList comments={comments} />
      
      <ReplyCreate onAddComment={handleAddComment} item={item}/>
      
      
    </Replyer>
    
    <MoreComment>
      <p>댓글 더보기</p>
    </MoreComment>
  </div>
  )
}

export { FeedDetail, ImageArea, Replyer };
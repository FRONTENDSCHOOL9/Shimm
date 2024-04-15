
import styled from 'styled-components'
import { UserInfo } from '@pages/community/user/UserInfo'
import { ReplyCreate, Replyer } from '@pages/community/feed/ReplyCreate'
import ReplyList from '@pages/community/feed/ReplyList'
import { MoreComment } from '@pages/community/feed/Feed'
import { useState } from 'react'

// const replyer = [
//     {
//         id: 1,
//         userId: 'replyer_01',
//         profileImg: '#',
//         comment: '사용자 댓글'
//     },
// ]

const sample = [
  {
    _id: 1,
    userId: 'user0202',
    profileImg: '#',
    post: 'jjj'
  }
]

const ImageArea = styled.div`
   aspect-ratio: 16/9;
   margin-bottom: 1rem;
   background-color: #F0F5ED;
   border-radius: 8px;
`

// const Replyer = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 1.2rem;
//     margin-block: 1rem;
//     position: relative;
    
//     & img:first-child {
//         flex-shrink: 0;
//         width: 3rem;
//         height: 3rem;
//         box-shadow: inset 0 0 20px #335635;
//         border-radius: 50%;
//     }

//     & img:last-child {
//         cursor: pointer;
//         flex-shrink: 1;
//         height: 20px;
//         width: 22px;
//        }
// `

function FeedDetail({ item }) {
  const [ comments, setComments ] = useState([]);
  const { 
    _id,
    user, 
    profile, 
    content,
    product,
    createdAt } = item;

  function handleAddComment(newComment){
    setComments([...comments, newComment])
  }
  
  return ( 
    <div>
    <UserInfo profile={profile} userId={user.name} />
    <div>{post}</div>
    <ImageArea />
   
    <Replyer>

      <ReplyList comments={comments} />
      <ReplyCreate onAddComment={handleAddComment} item={item}/>
      
    </Replyer>
    

  </div>
  )
}

export { FeedDetail, ImageArea };
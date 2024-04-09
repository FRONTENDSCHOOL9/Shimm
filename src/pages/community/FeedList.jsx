import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ListLi = styled.li`
    color: black;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    padding: 2.2rem;
    margin-bottom: 1rem;
`

const UserInfo = styled.div`
    display: flex;
    gap: 1rem;

    & img {
        box-shadow: inset 0 0 20px #335635;
        border-radius: 50%;
    }

    & span:last-child {
        margin-left: auto;
        color: #727272;
        font-size: 1.6rem;
    }
`

const PaintFeed = styled.div`
    display: flex;
    flex-direction: column;

    & h2 {
        margin: 4rem auto ;
        font-size: 3rem;
    }
`

const ImageArea = styled.div`
   aspect-ratio: 16/9;
   margin-bottom: 1rem;
   box-shadow: inset 100px 100px 100px 100px #F0F5ED;
   border-radius: 8px;
`

const Replyer = styled.div`
    display: flex;
    gap: 2rem;
    & li { 
        list-style-type: none;
        display: flex;
        gap: 1rem;
    }

    & img {
        box-shadow: inset 0 0 20px #335635;
        border-radius: 50%;
    }
    
    & textarea {
        height: 2.4rem;
        padding: 0.4rem;
        box-sizing: border-box;
        border: none;
        resize: none;
        outline: none;
    }
`

const Like = styled.div`
    font-size: 1.8rem;
    padding: 0.6rem 0;
`

const MoreComment = styled.div`
    font-size: 1.6rem;
    padding: 1rem 0;
    color: #727272;
`

function FeedList(){
    const [ postList, setPostList] = useState([
        
    ]) 
    const [ newComment, setNewComment ] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        console.log(newComment)
        if(newComment.trim() !== '')
        setNewComment([...newComment, setNewComment ])
        setNewComment('');
        }
    

    const feedList = [
        {
        id: 1,
        userId: 'user_01',
        profileImgUrl: '#',
        post: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        },   
        {
        id: 2,
        userId: 'user_02',
        profileImgUrl: '#',
        post: '요세하녕안요세하녕안요세하녕안요세하녕안요세하녕안요세하녕안요세하녕안요세하녕안요세하녕안요세하녕안요세하',
        },   
        {
        id: 3,
        userId: 'user_03',
        profileImgUrl: '#',
        post: '안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가',
        },   
        {
        id: 4,
        userId: 'user_04',
        profileImgUrl: '#',
        post: '안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가',
        },   
        {
        id: 5,
        userId: 'user_05',
        profileImgUrl: '#',
        post: '안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가',
        },   
        {
        id: 6,
        userId: 'user_06',
        profileImgUrl: '#',
        post: '안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가',
        },   
        {
        id: 7,
        userId: 'user_07',
        profileImgUrl: '#',
        post: '안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가',
        },   
    ]   

    const replyer = [
        {
            id: 1,
            userId: 'replyer_01',
            profileImgUrl: '#',
        },
    ]

    return(
        <PaintFeed>
            <h2>커뮤니티</h2>
            {
            feedList.map(item=>(
            <ListLi key={item.id}>
                <UserInfo>
                    <img src={item.profileImgUrl} alt="#" />
                    <span>{item.userId}</span>
                    <span>3분전</span>
                </UserInfo>
                <br />
                <div>
                    <span>{item.post}</span>
                </div>
                <br />
                <form onSubmit={handleSubmit}>
                    <ImageArea>
                        <img src='' alt="사용자가 등록한 사진"/>
                    </ImageArea>
                    <Like>
                        <span>♡ 23명이 좋아합니다.</span>
                    </Like>
                        {replyer && replyer.map(t=>
                        <Replyer key={t.id}>
                            <img src={t.profileImgUrl} alt="#" />
                            <span>{t.userId}</span>
                            <textarea value={newComment}
                                      placeholder='comment...'
                                      onChange={(e)=>setNewComment(e.target.value)}
                            />
                        </Replyer>
                        )}
                    <Link to='/'>
                      <MoreComment>2개의 댓글 더보기</MoreComment>
                    </Link>
                    
                </form>
        
            </ListLi>
            ))
            }
           
        </PaintFeed>
    )
}
export default FeedList;
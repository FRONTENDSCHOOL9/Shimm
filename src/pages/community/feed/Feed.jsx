import styled from "styled-components";
import { UserInfo } from "@pages/community/user/UserInfo";
import { Link, useNavigate } from "react-router-dom";
import { ImageArea, Replyer } from "@pages/community/feed/FeedDetail";
import iconlike from '../../../assets/icon-like.svg'
import iconsend from '../../../assets/icon-send.svg'
import { useState } from "react";
import ReplyList from "@pages/community/feed/ReplyList";
import ReplyCreate from "@pages/community/feed/ReplyCreate";

const replyer = [
    {
        id: 'i`m user2',
        userId: 'replyer_01',
        profileImgUrl: '#',
    },
]

const FeedWrapper = styled.li`
    max-width: 740px;
    width: 100%;
    color: black;
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

const Post = styled.div`
    margin-block: 2rem;
    display: flex;
    flex-wrap: nowrap;
    overflow-wrap: break-word;
    
`

const StateWrapper = styled.div`
    display: flex;
    font-size: 1.8rem;
    padding: 0.6rem 0;
    justify-content: space-between;

    & span {
        color: #727272;
        font-size: 1.6rem;
    }

    & img {
        cursor: pointer;
        width: 3rem;
    }
`

const MoreComment = styled.div`
    font-size: 1.6rem;
    padding: 1rem 0;
    color: #727272;
    margin-bottom: 2rem;
`

function Feed({ item }){
    const [ comments, setNewComment ] = useState([]);
    const { id, profileImg, userId, post } = item;
    const navigate = useNavigate();
    

    function handleFeedClick(id){
        navigate(`/detail/${id}`)
    }
    
    function handleAddComment(newComment){
        setNewComment([...comments, newComment])
    }
    
    return (
        <FeedWrapper>
            <UserInfo profileImg={profileImg} userId={userId} />
            <div onClick={()=>handleFeedClick(item.id)}>
                <Post>
                   <span>{post}</span>
                </Post>
                <ImageArea />
            </div>
            <StateWrapper>
                <span>3분 전</span>
                <img src={iconlike} alt="게시글 좋아요 버튼" />
            </StateWrapper>
            <UserInfo 
                profileImg={profileImg} 
                userId={userId} 
                comment={replyer}/>
            
            <ReplyList comments={comments}/>
                {replyer && replyer.map(t=>
                <Replyer key={t.id}>
                    <img src={t.profileImgUrl} alt="#" />
                    <ReplyCreate onAddComment={handleAddComment}/>
                    <img src={iconsend} alt="댓글 등록 버튼" />
                </Replyer>
                )}
            
            <MoreComment>
                <Link to={`/detail/${id}`}>
                    댓글 더보기
                </Link>
            </MoreComment>
        </FeedWrapper>
    )
}

export { MoreComment, Feed }


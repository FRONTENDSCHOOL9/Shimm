import { useState } from 'react'
import styled from 'styled-components'
import FeedCreate from '@pages/community/feed/FeedCreate'
import { Feed } from '@pages/community/feed/Feed'

import useCustomAxios from '@hooks/useCustomAxios.mjs'
import { QueryClientProvider, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

const feedList = [
    {
    id: 1,
    userId: 'user_01',
    profileImgUrl: '#',
    post: 'ㅁㄴㅇㄹ',
    },   
    {
    id: 2,
    userId: 'user_02',
    profileImgUrl: '#',
    post: '안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가',
    },   
    {
    id: 3,
    userId: 'user_03',
    profileImgUrl: '#',
    post: 'abcdefddf',
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
    post: 'hit the road',
    },   
    {
    id: 6,
    userId: 'user_06',
    profileImgUrl: '#',
    post: 'cocococococococo',
    },   
    {
    id: 7,
    userId: 'user_07',
    profileImgUrl: '#',
    post: 'v안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가',
    },   
]   

const FeedTemplateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-y: hidden;
    padding: 2rem;
`

async function FeedList( ){
    const [ newComment, setNewComment ] = useState([]);
    const { _id } = useParams();
    const axios = useCustomAxios();
   
    
    }
    
    function handleSubmit(e){
        e.preventDefault();
        console.log(newComment)
        if(newComment.trim() !== '')
        setNewComment([...newComment, setNewComment ])
        setNewComment('');
        }

    

    return(
            <FeedTemplateWrapper>
                
                {data.map(item=>(
                    <Feed key={item.id} item={item} />))
                }
                <FeedCreate />
            </FeedTemplateWrapper>   
    )
}
export default FeedList;
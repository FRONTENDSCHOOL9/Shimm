import styled from 'styled-components';
import { UserInfo } from '@pages/community/user/UserInfo';
import { ReplyCreate, Replyer } from '@pages/community/feed/ReplyCreate';
import ReplyList from '@pages/community/feed/ReplyList';
import { useEffect, useState } from 'react';
import { FeedWrapper, ImageArea } from '@pages/community/feed/FeedList';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useParams } from 'react-router-dom';
import useUserStore from '@zustand/user.mjs';
import { useQuery } from 'react-query';


function FeedDetail() {
  const [comments, setComments] = useState([]);
  const axios = useCustomAxios();
  const { id } = useParams();
  console.log(id)
  useEffect(()=>{
    
  },[])

  const { data } = useQuery({
    queryKey: [`/posts/${id}`],
    queryFn: ()=>axios.get(`/posts//${id}`),
    select: response => response.data
  })
  
 
  const item = data?.item;
  console.log(item)

  function handleAddComment(newComment) {
    setComments([...comments, newComment]);
  }

  return (
   
    <FeedWrapper>
    
       {data && (
     <>
         <UserInfo profile={item.user.profile} userId={item.user.name} />
           <div>{item.content}</div>
         { item.image || <ImageArea />}
          

           <Replyer>
           <ReplyList comments={comments} />
            <ReplyCreate onAddComment={handleAddComment} item={item} />
        </Replyer>
        </>
     )} 
      </FeedWrapper>
  );
  }


export { FeedDetail, ImageArea };
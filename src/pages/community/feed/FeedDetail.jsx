import styled from 'styled-components';
import { UserInfo } from '@pages/community/user/UserInfo';
import { ReplyCreate, Replyer } from '@pages/community/feed/ReplyCreate';
import ReplyList from '@pages/community/feed/ReplyList';
import { useEffect, useState } from 'react';
import { FeedWrapper, ImageArea } from '@pages/community/feed/FeedList';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useParams } from 'react-router-dom';


function FeedDetail() {
  const [comments, setComments] = useState([]);
  const axios = useCustomAxios();
  const [ data, setData ] = useState();
  const { _id } = useParams();

  useEffect(() => {
    fetchDetail();
  }, []);
  
  const fetchDetail = async () => {
    try {
      const res = await axios.get(`/posts/${_id}`)
      console.log(res.data)
      setData(res.data)
    }
     catch (err) {
     console.log(err)
     }
    }

  const item = data?.item;
     

  
  // async function fetchList() {
  //    try {
  //       const res = await axios.get(`/posts/${_id}`);
  //        console.log(res)
  //       // setData(res.data)
  //    } catch(err) {
  //        console.log(err);
  //    }
  // }


  function handleAddComment(newComment) {
    setComments([...comments, newComment]);
  }

  return (
    
    <FeedWrapper>
      {item && (
        <>
          <UserInfo profileImg={item.user._id} userId={item.user.name} />
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
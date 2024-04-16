import { useEffect, useState } from "react";
import styled from "styled-components";
import useCustomAxios from '@hooks/useCustomAxios.mjs'
import FeedCreate from "@pages/community/feed/FeedCreate";
import { FeedList } from "@pages/community/feed/FeedList";

const FeedTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: hidden;
  padding: 2rem;
`;

function Feed() {

  const [newComment, setNewComment] = useState([]);
  const axios = useCustomAxios();
  const [ data, setData ] = useState()
  useEffect(() => {
    fetchList();
  }, []);
  
  async function fetchList() {
     try {
        const res = await axios.get('/posts');
        console.log(res.data)
        setData(res.data)
     } catch(err) {
         console.log(err);
     }
  }

  const item = data?.item

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newComment);
    if (newComment.trim() !== '') setNewComment([...newComment, setNewComment]);
    setNewComment('');
  }

  return (
    <FeedTemplateWrapper>
      {item?.map(item => (
        <FeedList key={item._id} item={item} />
      ))}
      <FeedCreate />
    </FeedTemplateWrapper>
  );

}

export default Feed;
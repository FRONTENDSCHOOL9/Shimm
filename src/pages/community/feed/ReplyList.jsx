import React from 'react'
import styled from 'styled-components';


function ReplyList({ comments }) {
    const commentsList = comments || [];

  return (
    <div>
        {commentsList.map((comment, index)=>(
            <div key={index}>
                <p>{comment.text}</p>
            </div>
        ))}
    </div>
  )
}

export default ReplyList
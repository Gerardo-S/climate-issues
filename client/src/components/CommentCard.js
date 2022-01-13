import React from "react";
import CommentCardContainer from "./shared/CommentCardContainer";

function CommentCard({ comment }) {
  console.log("comment", comment);
  return (
    <CommentCardContainer>
      <h5>Comment By: {comment.author}</h5>
      <p>{comment.body}</p>
    </CommentCardContainer>
  );
}

export default CommentCard;

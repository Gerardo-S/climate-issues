import React from "react";
import CommentCardContainer from "./shared/CommentCardContainer";

function CommentCard() {
  return (
    <CommentCardContainer>
      <h5>Comment By: User</h5>
      <p>
        Mauris et luctus ante. Praesent scelerisque lacinia urna sit amet
        blandit. Ut in magna volutpat eros dignissim pharetra et vitae tellus.
        Aliquam placerat convallis ultricies.
      </p>
    </CommentCardContainer>
  );
}

export default CommentCard;

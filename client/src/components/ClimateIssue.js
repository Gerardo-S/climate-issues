import React from "react";
import Card from "./shared/Card";
import CommentCard from "./CommentCard";

function ClimateIssue({
  voteCount,
  username,
  postTitle,
  postDescription,
  commentsData,
  toggleComments,
  handleToggleComments,
}) {
  return (
    <Card>
      <section className="climateIssueContainer">
        <div className="voteContainer">
          <h5>upVote</h5>
          <h5>Counter</h5>
          <h5>downVote</h5>
        </div>
        <div className="climateIssueText">
          <h3>Posted By: UserName Here</h3>
          <h4>Post Title Here</h4>
          <p>
            Post Description here:Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris et luctus ante. Praesent scelerisque lacinia
            urna sit amet blandit. Ut in magna volutpat eros dignissim pharetra
            et vitae tellus. Aliquam placerat convallis ultricies.{" "}
          </p>
        </div>
      </section>
      <div className="commentsContainer">
        <div className="commentsTitle">
          <h5>View Comments</h5>
          <div id="downVoteArrow" onClick={handleToggleComments}>
            Down arrow image
          </div>
        </div>
        {toggleComments ? <CommentCard /> : null}
      </div>
    </Card>
  );
}

export default ClimateIssue;

import React from "react";
import Card from "./shared/Card";
import CommentCard from "./CommentCard";

function ClimateIssue({ issueData, toggleComments, handleToggleComments }) {
  return (
    <Card>
      <section className="climateIssueContainer">
        <div className="voteContainer">
          <h5>upVote</h5>
          <h5>{issueData.totalVoteCount}</h5>
          <h5>downVote</h5>
        </div>
        <div className="climateIssueText">
          <h3>Posted By: {issueData.author.username}</h3>
          <h4>{issueData.title}</h4>
          <p>{issueData.body}. </p>
        </div>
      </section>
      <div className="commentsContainer">
        <div className="commentsTitle">
          <h5>View Comments</h5>
          <div
            className="viewComments"
            id={issueData.id}
            onClick={handleToggleComments}
          >
            Down arrow
          </div>
          <div style={{ marginLeft: "2em" }}>Add a Comment</div>
        </div>
        {issueData.comments.map((comment) => {
          return <CommentCard key={comment.id} comment={comment} />;
        })}
      </div>
    </Card>
  );
}

export default ClimateIssue;

import React, { useState } from "react";
import ClimateIssue from "../components/ClimateIssue";
function Issues() {
  const [toggleComments, setToggleComments] = useState(false);

  const handleToggleComments = (evt) => {
    evt.preventDefault();
    toggleComments ? setToggleComments(false) : setToggleComments(true);
  };

  return (
    <div className="issuesPageContainer">
      <h1>Trending Post</h1>
      <ClimateIssue
        // voteCount,
        // username,
        // postTitle,
        // postDescription,
        // commentsData,
        handleToggleComments={handleToggleComments}
        toggleComments={toggleComments}
      />

      <br />
    </div>
  );
}
export default Issues;

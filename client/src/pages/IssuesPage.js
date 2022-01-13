import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import ClimateIssue from "../components/ClimateIssue";
import gql from "graphql-tag";

function IssuesPage() {
  const { loading, data } = useQuery(FETCH_CLIMATE_ISSUES_QUERY);
  const [toggleComments, setToggleComments] = useState(false);

  if (data) {
    console.log(data);
  }

  // TODO if time permits get element by id and switch class to hidden
  const handleToggleComments = (evt) => {
    evt.preventDefault();
    const target = evt.target.id;
    // const commentDiv = document.getElementById();
    // toggleComments ? setToggleComments(false) : setToggleComments(true);
  };

  return (
    <div className="issuesPageContainer">
      <h1>Trending Post</h1>
      {data &&
        data.getClimateIssues.map((issueData) => {
          return (
            <ClimateIssue
              key={issueData.id}
              issueData={issueData}
              handleToggleComments={handleToggleComments}
              toggleComments={toggleComments}
            />
          );
        })}

      <br />
    </div>
  );
}

const FETCH_CLIMATE_ISSUES_QUERY = gql`
  {
    getClimateIssues {
      id
      author {
        id
        username
      }
      title
      body
      upVote {
        id
        username
      }

      downVote {
        id
        username
      }
      totalVoteCount

      comments {
        author
        id
        body
        createdAt
      }
    }
  }
`;
export default IssuesPage;

import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import ClimateIssue from "../components/ClimateIssue";
import { FETCH_CLIMATE_ISSUES_QUERY } from "../util/graphql";
function IssuesPage() {
  const { loading, data } = useQuery(FETCH_CLIMATE_ISSUES_QUERY);
  const [toggleComments, setToggleComments] = useState(false);

  // TODO if time permits get element by id and switch class to hidden
  const handleToggleComments = (evt) => {
    evt.preventDefault();
    const target = evt.target.id;
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

export default IssuesPage;

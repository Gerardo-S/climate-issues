import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import { FETCH_CLIMATE_ISSUES_QUERY } from "../util/graphql";

function CreateIssuePage() {
  let navigate = useNavigate();
  const [issue, setIssue] = useState({
    title: "",
    body: "",
  });
  const handleInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setIssue({ ...issue, [name]: value });
  };
  const [createIssue, { error }] = useMutation(CREATE_ISSUE, {
    variables: issue,
    refetchQueries: [FETCH_CLIMATE_ISSUES_QUERY, "getClimateIssues"],
    update(proxy, result) {
      navigate("/all-issues-page");
    },
  });

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    createIssue();
  };
  return (
    <div className="homeContainer">
      <h1>Add Climate Issue</h1>
      <Form
        label1={"Post Title:"}
        type={"text"}
        name1={"title"}
        name2={"body"}
        placeHolder1={"title"}
        placeHolder2={"post body"}
        label2={"Description:"}
        textArea={true}
        inputValue={issue}
        buttonText={"Create"}
        handleInputChange={handleInputChange}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
}

const CREATE_ISSUE = gql`
  mutation createClimateIssue($title: String!, $body: String!) {
    createClimateIssue(title: $title, body: $body) {
      id
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
      }
    }
  }
`;
export default CreateIssuePage;

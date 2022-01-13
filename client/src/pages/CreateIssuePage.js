import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import Form from "../components/Form";

function CreateIssuePage() {
  const [issue, setIssue] = useState({
    title: "",
    body: "",
  });
  const handleInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setIssue({ ...issue, [name]: value });
  };
  const [createIssue, { loading }] = useMutation(CREATE_ISSUE, {
    // Destructure result.data.login and give alias "userData"
    // update(_, { data: { login: userData } }) {
    //   context.login(userData);
    //   navigate("/all-issues-page");
    // },
    // onError(err) {
    //   setErrors(err.graphQLErrors[0].extensions.errors);
    // },
    // variables: returningUser,
  });

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    // loginUser();
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
        buttonText={loading ? "...Loading" : "Create"}
        handleInputChange={handleInputChange}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
}

const CREATE_ISSUE = gql`
  mutation createIssue($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
      createdAt
      token
    }
  }
`;
export default CreateIssuePage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
function LogInPage(props) {
  let navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [returningUser, setReturningUser] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setReturningUser({ ...returningUser, [name]: value });
  };

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      navigate("/all-issues-page");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: returningUser,
  });

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    loginUser();
  };

  return (
    <div className="homeContainer">
      <h1>Please Login To Continue</h1>
      <Form
        label1={"Username:"}
        label2={"Password:"}
        inputValue={returningUser}
        buttonText={loading ? "...Loading" : "Login"}
        handleInputChange={handleInputChange}
        handleSubmitForm={handleSubmitForm}
      />

      {Object.keys(errors).length > 0 && (
        <div style={{ margin: "auto", width: "50%" }}>
          <ul>
            {Object.values(errors).map((val, index) => (
              <li id="errors" key={index + val}>
                *{val}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// graphQl Mutation
const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
      createdAt
      token
    }
  }
`;
export default LogInPage;

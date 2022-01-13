import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../context/auth";

function SignUpPage() {
  let navigate = useNavigate();
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setNewUser({ ...newUser, [name]: value });
  };

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    // Pass user Data to context login
    update(_, { data: { register: userData } }) {
      context.login(userData);
      navigate("/all-issues-page");
    },
    onError(err) {
      console.log(err);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: newUser,
  });

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    addUser();
  };

  return (
    <div className="homeContainer">
      <h1>Please Register To Continue</h1>
      <Form
        label1={"Username:"}
        label2={"Password:"}
        type={"text"}
        type2={"password"}
        name1={"username"}
        name2={"password"}
        placeHolder1={"username"}
        placeHolder2={"********"}
        inputValue={newUser}
        error={Object.keys(errors).length > 0 ? errors : false}
        buttonText={loading ? "...Loading" : "Register"}
        handleInputChange={handleInputChange}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
}

// graphQl Mutation
const REGISTER_USER = gql`
  mutation register($username: String!, $password: String!) {
    register(registerInput: { username: $username, password: $password }) {
      id
      username
      createdAt
      token
    }
  }
`;
export default SignUpPage;

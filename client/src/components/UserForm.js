import React from "react";
import Card from "./shared/Card";
import Container from "./shared/Container";
import Input from "./shared/Input";
import DropDown from "./shared/DropDown";
import Button from "./shared/Button";
import "./component-styles/shared.css";
function userForm({
  handleCreateUserInputChange,
  handleCreateUser,
  inputValue,
}) {
  return (
    <Card>
      <Container>
        <h2>Create New User</h2>
        <Card form={true}>
          <Input
            inputValue={inputValue.name}
            label={"Name:"}
            name={"name"}
            placeHolder={"First-Name"}
            type={"text"}
            handleInputChange={handleCreateUserInputChange}
          />
          <br />
          <Input
            inputValue={inputValue.password}
            label={"Create Password >6 characters:"}
            name={"password"}
            type={"password"}
            placeHolder={"password"}
            handleInputChange={handleCreateUserInputChange}
          />
          <br />
          <Input
            inputValue={inputValue.email}
            label={"Email:"}
            name={"email"}
            placeHolder={"email"}
            type={"email"}
            handleInputChange={handleCreateUserInputChange}
          />
          <br />
          <DropDown
            inputValue={inputValue.admin}
            label={"Admin:"}
            name={"admin"}
            handleInputChange={handleCreateUserInputChange}
          />
          <hr />
          <Button
            buttonText={"Add User"}
            buttonType={"submitButton"}
            handleSubmit={handleCreateUser}
          />
        </Card>
      </Container>
    </Card>
  );
}

export default userForm;

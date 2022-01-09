import React from "react";
import Card from "./shared/Card";
import Container from "./shared/Container";
import Input from "./shared/Input";
import DropDown from "./shared/DropDown";
import Button from "./shared/Button";
import "./component-styles/shared.css";
function BugForm({
  assignee,
  inputValue,
  usersData,
  handleCreateBugInputChange,
  handleCreateBug,
}) {
  return (
    <Card>
      <Container>
        <h2>Report Bug</h2>
        <Card form={true}>
          <Input
            label={"Title:"}
            inputValue={inputValue.title}
            name={"title"}
            placeHolder={"Bug-Title"}
            handleInputChange={handleCreateBugInputChange}
            handleCreateBug={handleCreateBug}
          />
          <br />
          <Input
            label={"Description:"}
            inputValue={inputValue.description}
            name={"description"}
            placeHolder={"Bug Details"}
            textArea={true}
            handleInputChange={handleCreateBugInputChange}
            handleCreateBug={handleCreateBug}
          />
          <br />
          <DropDown
            name={"assignee"}
            inputValue={inputValue.assignee}
            assignee={assignee}
            usersData={usersData}
            handleInputChange={handleCreateBugInputChange}
          />
          <hr />
          <Button
            buttonText={"Add Bug"}
            buttonType={"submitButton"}
            handleSubmit={handleCreateBug}
          />
        </Card>
      </Container>
    </Card>
  );
}

export default BugForm;

import React from "react";
import Card from "./shared/Card";
import Input from "./shared/Input";
import "./component-styles/shared.css";
function Form({
  label1,
  label2,
  assignee,
  inputValue,
  usersData,
  handleCreateBugInputChange,
  handleCreateBug,
}) {
  return (
    <Card form={true}>
      <Input
        label={label1}
        // inputValue={"inputValue.title"}
        name={"username"}
        placeHolder={"username"}
        // handleInputChange={handleCreateBugInputChange}
        // handleCreateBug={handleCreateBug}
      />
      <br />
      <Input
        label={label2}
        // inputValue={inputValue.description}
        name={"password"}
        placeHolder={"******"}
        textArea={false}
        type={"password"}
        // handleInputChange={handleCreateBugInputChange}
        // handleCreateBug={handleCreateBug}
      />
      <br />
    </Card>
  );
}

export default Form;

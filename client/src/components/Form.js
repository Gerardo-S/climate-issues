import React from "react";
import Card from "./shared/Card";
import Input from "./shared/Input";
import Button from "./shared/Button";
import "./component-styles/shared.css";
function Form({
  label1,
  label2,
  inputValue,
  buttonText,
  handleInputChange,
  handleSubmitForm,
  error,
}) {
  return (
    <Card form={true}>
      <Input
        label={label1}
        inputValue={inputValue.username}
        name={"username"}
        placeHolder={"username"}
        error={error ? error.username.message : false}
        handleInputChange={handleInputChange}
      />
      <br />
      <Input
        label={label2}
        inputValue={inputValue.password}
        name={"password"}
        placeHolder={"******"}
        textArea={false}
        type={"password"}
        error={error ? error.password.message : false}
        handleInputChange={handleInputChange}
      />
      <br />

      <Button
        buttonText={buttonText}
        buttonType={"submitButton"}
        buttonContainer={"submitButtonContainer"}
        handleSubmit={handleSubmitForm}
      />
    </Card>
  );
}

export default Form;

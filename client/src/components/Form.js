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
  textArea,
  type,
  type2,
  handleInputChange,
  handleSubmitForm,
  error,
  placeHolder1,
  placeHolder2,
  name1,
  name2,
}) {
  return (
    <Card form={true}>
      <Input
        label={label1}
        type={type}
        inputValue={inputValue.username}
        name={name1}
        placeHolder={placeHolder1}
        error={error ? error.username.message : false}
        handleInputChange={handleInputChange}
      />
      <br />
      <Input
        label={label2}
        type2={type2}
        inputValue={inputValue.password}
        name={name2}
        placeHolder={placeHolder2}
        type={type}
        error={error ? error.password.message : false}
        handleInputChange={handleInputChange}
        textArea={textArea}
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

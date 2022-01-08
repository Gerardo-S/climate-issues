import React from "react";
import "../component-styles/shared.css";
function Input({
  inputValue,
  label,
  name,
  placeHolder,
  textArea,
  type,
  labelBoolean,
  handleInputChange,
}) {
  return (
    <>
      {textArea ? (
        <>
          <label htmlFor={name}>{label}</label>
          <br />
          <textarea
            rows="5"
            value={inputValue}
            cols="30"
            type={type ? type : "text"}
            id="todoText"
            name={name}
            onChange={handleInputChange}
            placeholder={placeHolder}
          />
        </>
      ) : (
        <>
          {labelBoolean}
          <label htmlFor={name}>{label}</label>
          <br />
          <input
            value={inputValue}
            required
            type={type ? type : "text"}
            id={placeHolder}
            name={name}
            onChange={handleInputChange}
            placeholder={placeHolder}
          />
        </>
      )}
    </>
  );
}

export default Input;

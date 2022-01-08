import React from "react";
import "../component-styles/shared.css";
function Button({ buttonText, buttonType, handleSubmit, id }) {
  return (
    <div className="buttonContainer">
      <button id={id} className={buttonType} onClick={handleSubmit}>
        {buttonText}
      </button>
    </div>
  );
}

export default Button;

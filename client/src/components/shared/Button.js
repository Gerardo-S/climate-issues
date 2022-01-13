import React from "react";
import "../component-styles/shared.css";
function Button({ buttonText, buttonType, handleSubmit, id, buttonContainer }) {
  return (
    <div className={buttonContainer ? buttonContainer : "buttonContainer"}>
      <button id={id} className={buttonType} onClick={handleSubmit}>
        {buttonText}
      </button>
    </div>
  );
}

export default Button;

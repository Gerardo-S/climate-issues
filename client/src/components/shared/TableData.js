import React from "react";
import "../component-styles/shared.css";
function TableData({ name, value, cellWidth }) {
  return (
    <div
      contentEditable="true"
      suppressContentEditableWarning={true}
      style={{ width: "100%" }}
    >
      <input
        type="text"
        name={name}
        value={value}
        onChange={() => {
          "";
        }}
        style={{
          border: "none",
          height: "2rem",
          width: cellWidth,
          backgroundColor: "inherit",
        }}
      />
    </div>
  );
}

export default TableData;

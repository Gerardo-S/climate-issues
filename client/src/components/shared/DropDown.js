import React from "react";
import "../component-styles/shared.css";
function DropDown({
  assignee,
  usersData,
  handleInputChange,
  name,
  inputValue,
}) {
  return (
    <>
      {assignee ? (
        <label htmlFor={"assignee"}>Assignee:</label>
      ) : (
        <label htmlFor={"admin"}>Admin:</label>
      )}
      <br />

      <select
        id="admin or assignee"
        name={name}
        placeholder="Select if true or choose team member"
        onChange={handleInputChange}
      >
        <option value={inputValue}>Select an Option</option>
        {assignee ? (
          <>
            {usersData.map((user) => {
              return (
                <option key={user._id} value={user.name}>
                  {user.name}
                </option>
              );
            })}
          </>
        ) : (
          <>
            {" "}
            <option value="true">true</option>
            <option value="false">False</option>
          </>
        )}
      </select>
    </>
  );
}

export default DropDown;

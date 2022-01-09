import React from "react";
import Card from "./shared/Card";
import "./component-styles/shared.css";
function Title({ title }) {
  return (
    <Card>
      <h1>{title}</h1>
    </Card>
  );
}

export default Title;

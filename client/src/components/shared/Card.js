import React from "react";
import "../component-styles/shared.css";
function Card({ children, form }) {
  return <div className={form ? "cardForm" : "card"}>{children}</div>;
}

export default Card;

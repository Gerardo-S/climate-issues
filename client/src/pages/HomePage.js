import React from "react";
import { Link } from "react-router-dom";
import "../components/component-styles/shared.css";
import "./home-style.css";
import Button from "../components/shared/Button";
function HomePage() {
  return (
    // TODO add context provider to avoid prop drilling
    <div className="homeContainer">
      <h1>This will be the Home Page</h1>
      <div className="homeButtonContainer">
        <Link to="/login-page">
          <Button buttonText={"Log-In"} buttonType={"logInButton"} />
        </Link>
        <Link to="/register-page">
          <Button buttonText={"Sign-Ip"} buttonType={"logInButton"} />
        </Link>
      </div>
    </div>
  );
}
export default HomePage;

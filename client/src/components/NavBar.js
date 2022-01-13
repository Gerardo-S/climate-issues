import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./component-styles/shared.css";
import { AuthContext } from "../context/auth";
import Button from "./shared/Button";
function NavBar() {
  const { user, logout } = useContext(AuthContext);

  const navItemList = user ? (
    <div className="navItemsList">
      <Link to="all-issues-page">
        <h3>Climate-Issues</h3>
      </Link>
      <Link to="create-issue-post">
        <h3>Post-Issue</h3>
      </Link>
      <Link to="my-issue-post">
        <h3>See-Your-Post</h3>
      </Link>
      <Link to="/">
        <Button
          buttonText={"Logout"}
          buttonType={"submitButton"}
          handleSubmit={logout}
        />
      </Link>
    </div>
  ) : (
    <div className="navItemsList">{null}</div>
  );
  return (
    <nav className="navContainer">
      <Link to="/">
        <div id="logoContainer">
          <span id="logo">
            <h2>Logo</h2>
          </span>
          <h2>{user ? `Welcome Back ${user.username}` : "Home"}</h2>
        </div>
      </Link>
      {navItemList}
    </nav>
  );
}

export default NavBar;

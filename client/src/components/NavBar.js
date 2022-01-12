import React from "react";
import { Link } from "react-router-dom";
import "./component-styles/shared.css";
function NavBar({ title }) {
  return (
    <nav className="navContainer">
      <Link to="/">
        <div id="logoContainer">
          <span id="logo">
            <h2>Logo</h2>
          </span>
          <h2>Home</h2>
        </div>
      </Link>
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
      </div>
    </nav>
  );
}

export default NavBar;

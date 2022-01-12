import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateIssuePage from "./pages/CreateIssuePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyIssuesPage from "./pages/MyIssuesPage";
import SignUpPage from "./pages/SignUpPage";
import IssuesPage from "./pages/IssuesPage";
import NavBar from "./components/NavBar";
import "./index.css";
function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login-page" element={<LoginPage />} />
          <Route exact path="/register-page" element={<SignUpPage />} />
          <Route exact path="/all-issues-page" element={<IssuesPage />} />
          <Route exact path="/my-issue-post" element={<MyIssuesPage />} />
          <Route
            exact
            path="/create-issue-post"
            element={<CreateIssuePage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/auth";
import ProtectedRoute from "./util/ProtectedRoute";

import CreateIssuePage from "./pages/CreateIssuePage";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import MyIssuesPage from "./pages/MyIssuesPage";
import SignUpPage from "./pages/SignUpPage";
import IssuesPage from "./pages/IssuesPage";
import NavBar from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login-page" element={<LogInPage />} />
            <Route exact path="/register-page" element={<SignUpPage />} />
            <Route
              exact
              path="/all-issues-page"
              element={
                <ProtectedRoute redirectTo={"/"}>
                  <IssuesPage />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/my-issue-post"
              element={
                <ProtectedRoute redirectTo={"/"}>
                  <MyIssuesPage />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/create-issue-post"
              element={
                <ProtectedRoute redirectTo={"/"}>
                  <CreateIssuePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

import axios from "axios";
// Get All Bugs
const getAllBugs = () => {
  return axios.get("/api/bugs");
};
// Get all Users
const getAllUsers = () => {
  return axios.get("/api/users");
};
// Post User
const createNewUser = (newUser) => {
  return axios.post("/api/users", newUser);
};

// Post Bug
const createNewBug = (newBug) => {
  return axios.post("/api/bugs", newBug);
};
// Delete Bug
const removeBug = (bugId) => {
  return axios.delete(`/api/bugs/id/${bugId}`);
};

// Update Bug

const API = { getAllBugs, getAllUsers, createNewUser, createNewBug, removeBug };
export default API;

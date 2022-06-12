import axios from "axios";

const usersURL = "http://localhost:8000";

export const addUser = async (user) => {
  try {
    return await axios.post(`${usersURL}/add`, user);
  } catch (error) {
    console.log("Error while calling add User Api ", error);
  }
};

// get data from database for all users
export const getUsers = async (id) => {
  try {
    id = id || "";
    return await axios.get(`${usersURL}/${id}`); // or  (`${usersURL}/all`)
  } catch (error) {
    console.log("Error while calling getUsers API", error);
  }
};

// a single user from table to edit

export const getUser = async (id) => {
  try {
    return await axios.get(`${usersURL}/${id}`);
  } catch (error) {
    console.log("Error while calling getUser api ", error);
  }
};

export const editUser = async (id, user) => {
  try {
    return await axios.put(`${usersURL}/${id}`, user);
  } catch (error) {
    console.log("Error while calling editUser api ", error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${usersURL}/${id}`);
  } catch (error) {
    console.log("Error while deleteUser api ", error);
  }
};

import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { getUsers, deleteUser } from "../server/api";
import { Link, useNavigate } from "react-router-dom";

function Actions() {
  const [user, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers("all");
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const navigateToAdd = () => {
    // 👇️ navigate to /contacts
    navigate("/add");
  };

  return (
    <Box>
      <IconButton aria-label="delete" onClick={() => deleteUserData(user._id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" component={Link} to={`/edit/${user._id}`}>
        <EditIcon />
      </IconButton>
    </Box>
  );
}

export default Actions;

import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { Box, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../server/api";

const ActionsEmp = () => {
  const [user, setUsers] = useState([]);
  //   const navigate = useNavigate();

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

  //   const navigateToAdd = () => {
  //     // 👇️ navigate to /contacts
  //     navigate("/add");
  //   };
  return (
    <Box>
      <Tooltip title="Edit">
        <IconButton component={Link} to={`/edit/${user._id}`}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton onClick={() => deleteUserData(user._id)}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ActionsEmp;

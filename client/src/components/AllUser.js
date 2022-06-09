import React, { useEffect, useState } from "react";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  styled,
  Button,
} from "@mui/material";

import { getUsers, deleteUser } from "../server/api.js";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const Thead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #ffff;
    font-size: 20px;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState();
  console.log(users);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data.toString());
    // console.log(response.data);
  };

  const deleteUserDetails = async () => {
    await deleteUser();
    getAllUsers();
  };

  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>name</TableCell>
          <TableCell>birth</TableCell>
          <TableCell>address</TableCell>
          <TableCell>phone</TableCell>
          <TableCell>salary</TableCell>
          <TableCell>debts</TableCell>
          <TableCell>date</TableCell>
          <TableCell>Actions</TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TBody key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.birth}</TableCell>
            <TableCell>{user.address}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.salary}</TableCell>
            <TableCell>{user.debts}</TableCell>
            <TableCell>{user.date}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit <i class="fa-solid fa-pencil"></i>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUserDetails(user._id)}
              >
                Delete <i class="fa-solid fa-trash-can"></i>
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;

import React, { useEffect, useState } from "react";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from "@mui/material";

import { getUsers } from "../server/api.js";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.date);
    // console.log(response.data);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>name</TableCell>
          <TableCell>birth</TableCell>
          <TableCell>address</TableCell>
          <TableCell>phone</TableCell>
          <TableCell>salary</TableCell>
          <TableCell>debts</TableCell>
          <TableCell>date</TableCell>
          {/* <TableCell>Actions</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {/* {users.map((user) => (
          <TableRow>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.birth}</TableCell>
            <TableCell>{user.address}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.salary}</TableCell>
            <TableCell>{user.debts}</TableCell>
            <TableCell>{user.date}</TableCell>
          </TableRow>
        ))} */}
      </TableBody>
    </Table>
  );
};

export default AllUsers;

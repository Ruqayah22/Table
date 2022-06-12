import React, { useEffect, useState } from "react";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  styled,
  Button,
  Container,
} from "@mui/material";

import { getUsers, deleteUser } from "../server/api";
import { Link, useNavigate } from "react-router-dom";
// import {  useParams } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const Thead = styled(TableRow)`
  & > th {
    background: #000000;
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
    <Container>
      {/* <TextField label="Search input" /> */}
      <Button variant="outlined" onClick={navigateToAdd}>
        Add User
      </Button>

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
          {user.map((user) => (
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
                  color="primary"
                  variant="contained"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Edit <i className="fa-solid fa-pencil"></i>
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUserData(user._id)}
                >
                  Delete <i className="fa-solid fa-trash-can"></i>
                </Button>
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </StyledTable>
    </Container>
  );
};

export default AllUsers;

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
  Avatar,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";

import { getUsers, deleteUser } from "../server/api";
import { Link, useNavigate } from "react-router-dom";
import { useStyles } from "../styles";
import TablePagination from "@mui/material/TablePagination";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import Avatar from "@mui/material/core/Avatar";

// import AddUserDialog from "./Dialog.js";
// import {  useParams } from "react-router-dom";

// const StyledTable = styled(Table)`
//   width: 90%;
//   margin: 50px auto 0 auto;
// `;

// const Thead = styled(TableRow)`
//   & > th {
//     background: #000000;
//     color: #ffff;
//     font-size: 20px;
//   }
// `;

// const TBody = styled(TableRow)`
//   & > td {
//     font-size: 20px;
//   }
// `;

const AllUsers = () => {
  const [user, setUsers] = useState([]);

  const navigate = useNavigate();

  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.TablePaper}>
      <Container className={classes.TableContainer}>
        {/* <TextField label="Search input" /> */}

        <Button onClick={navigateToAdd} className={classes.Button}>
          Add User
        </Button>
        <Table
          className={classes.StyledTable}
          stickyHeader
          aria-label="sticky table"
        >
          <TableHead className={classes.Thead}>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>birth</TableCell>
              <TableCell>address</TableCell>
              <TableCell>phone</TableCell>
              <TableCell>salary</TableCell>
              <TableCell>debts</TableCell>
              <TableCell>date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.TBody}>
            {user
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>
                    <Avatar alt={user.name} src="." />
                    {user.name}
                  </TableCell>
                  <TableCell>{user.birth}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.salary}</TableCell>
                  <TableCell>{user.debts}</TableCell>
                  <TableCell>{user.date}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="delete"
                      onClick={() => deleteUserData(user._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      component={Link}
                      to={`/edit/${user._id}`}
                    >
                      <EditIcon />
                    </IconButton>
                    {/* <Button
                      color="primary"
                      variant="contained"
                      style={{ marginRight: 10 }}
                      component={Link}
                      to={`/edit/${user._id}`}
                    >
                      Edit <i className="fa-solid fa-pencil"></i>
                    </Button> */}
                    {/* <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteUserData(user._id)}
                    >
                      Delete <i className="fa-solid fa-trash-can"></i>
                    </Button> */}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {/* <AddUserDialog open={open} handleClose={handleClose} /> */}
      </Container>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={user.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default AllUsers;

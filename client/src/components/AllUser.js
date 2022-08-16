import React, { useEffect, useState } from "react";

import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  // styled,
  Button,
  // Container,
  Avatar,
  Paper,
  // TextField,
  IconButton,
  Grid,
} from "@mui/material";

import { getUsers, deleteUser } from "../server/api";
import { Link, useNavigate } from "react-router-dom";
// import { useStyles } from "../styles";
import TablePagination from "@mui/material/TablePagination";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SearchBar from "./SearchBar";

const AllUsers = () => {
  const [user, setUsers] = useState([]);

  const navigate = useNavigate();

  // const classes = useStyles();

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
    <Paper
      sx={{
        padding: "30px",
        margin: "180px 50px",
      }}
    >
      {/* <TextField label="Search input" sx={{ margin: "5px 0 30px 10px" }} /> */}
      <Button
        onClick={navigateToAdd}
        sx={{
          background: "#000000",
          color: "#fff",
          position: "absolute",
          top: "280px",
          left: "90%",
          borderRadius: "10px",
          paddingBottom: "10px",
        }}
      >
        <PersonAddAltIcon />
      </Button>

      <SearchBar />
      <Table stickyHeader aria-label="sticky table">
        <TableHead
          sx={{
            "& .MuiTableCell-head": {
              background: "#000000",
              color: "#ffff",
              fontSize: "20px",
              textAlign: "center",
            },
          }}
        >
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
        <TableBody
          sx={{
            "& .MuiTableCell-body": {
              fontSize: "20px",
            },
          }}
        >
          {user
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user._id}</TableCell>
                <TableCell>
                  <Grid container>
                    <Grid item xs={6}>
                      <Avatar
                        // className={classes.avatar}
                        alt={user.name}
                        src="."
                      />
                    </Grid>
                    <Grid item xs={6}>
                      {user.name}
                    </Grid>
                  </Grid>
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
                    aria-label="edit"
                    component={Link}
                    to={`/edit/${user._id}`}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {/* <AddUserDialog open={open} handleClose={handleClose} /> */}
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

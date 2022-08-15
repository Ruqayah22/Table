import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { deleteUser, getUsers } from "../server/api";
import { grey } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
// import Actions from "./Actions";

const AllEmployees = () => {
  const [user, setUsers] = useState([]);

  const [page, setPage] = useState(5);
  const navigate = useNavigate();

  const getAllUsers = async () => {
    let response = await getUsers("all");
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const navigateToAdd = () => {
    // 👇️ navigate to /contacts
    navigate("/add");
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 60 },
    { field: "name", headerName: "Name", width: 170 },
    { field: "birth", headerName: "Birth", width: 200 },
    { field: "address", headerName: "Address", width: 170 },
    { field: "phone", headerName: "Phone", width: 200 },
    { field: "salary", headerName: "Salary", width: 200 },
    { field: "debts", headerName: "Debts", width: 200 },
    { field: "date", headerName: "Date", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 200,
      renderCell: () => {
        return (
          <Box>
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
          </Box>
        );
      },
      //   getActions: (params) => [
      //     <IconButton
      //       aria-label="delete"
      //       onClick={() => deleteUserData(user._id)}
      //     >
      //       <DeleteIcon />
      //     </IconButton>,
      //     <IconButton
      //       aria-label="delete"
      //       component={Link}
      //       to={`/edit/${user._id}`}
      //     >
      //       <EditIcon />
      //     </IconButton>,
      //   ],

      //   renderCell: (params) => {
      //     <IconButton
      //       aria-label="delete"
      //       onClick={() => deleteUserData(user._id)}
      //     >
      //       <DeleteIcon />
      //     </IconButton>;
      //   },
    },
  ];

  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: "center", mt: 3, mb: 4 }}
      >
        All Employees
      </Typography>
      <DataGrid
        columns={columns}
        rows={user}
        loading={!user.length}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={page}
        onPageSizeChange={(newPageSize) => setPage(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        sx={{
          height: "550px",
          [`& .${gridClasses.row}`]: {
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? grey[200] : grey[900],
          },
        }}
      />
    </Box>
  );
};

export default AllEmployees;

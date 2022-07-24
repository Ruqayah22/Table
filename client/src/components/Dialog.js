import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddUser from "./AddUser";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Typography } from "@mui/material";

const AddUserDialog = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        sx={{
          marginTop: 0,
        }}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h4">
            <PersonAddAltIcon />
            Add Users
          </Typography>
        </DialogTitle>
        <DialogContent>
          <AddUser />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddUserDialog;

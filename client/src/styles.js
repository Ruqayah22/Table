import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  TableContainer: {
    // width: "200px",
  },
  TablePaper: {
    width: "75%",
    margin: "80px auto 0 auto",
  },

  StyledTable: {
    // "& .MuiTable-root": {},

    margin: "50px auto 0 auto",
  },

  Thead: {
    "& .MuiTableCell-head": {
      background: "#000000",
      color: "#ffff",
      fontSize: "20px",
      textAlign: "center",
    },
  },
  TBody: {
    "& .MuiTableCell-body": {
      fontSize: "20px",
    },
  },
  Button: {
    "&.MuiButton-root": {
      background: "#000000",
      color: "#fff",
      position: "absolute",
      top: 80,
      left: "80%",
      borderRadius: "10px",
      paddingBottom: "10px",
    },
  },
}));

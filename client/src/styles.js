import { makeStyles } from "@mui/styles";
// import { Image } from "./assets/AlWasee.jpg";

export const useStyles = makeStyles((theme) => ({
  TableContainer: {
    // "& .MuiTableContainer-root": { width: "90%", paddingTop: "100px" },
    // backgroundColor: "#000000",
    // minHeight: "100vh",
    // backgroundImage: `url(${Image})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // width: "200px",
  },
  TablePaper: {
    width: "75%",
    margin: "80px auto 0 auto",
    // overflow: "auto",
    // marginTop: "50px",
  },

  StyledTable: {
    // "& .MuiTable-root": {},
    // maxHeight: "60vh",
    // borderSpacing: "0",
    // border: " 1px solid black",
    // borderRadius: "10px",

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

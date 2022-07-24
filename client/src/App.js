import React, { useEffect } from "react";
import "./App.css";
import { useStyles } from "./styles.js";

// components
import NavBar from "./components/NavBar.js";
import AllUsers from "./components/AllUser.js";
import AddUser from "./components/AddUser.js";
import EditUser from "./components/EditUser.js";
import HomePage from "./components/HomePage.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const classes = useStyles();
  useEffect(() => {
    document.title = "Table";
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} className={classes.root} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

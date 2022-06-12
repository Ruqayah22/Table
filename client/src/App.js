import React from "react";
import "./App.css";

// components
import NavBar from "./components/NavBar.jsx";
import AllUsers from "./components/AllUser.jsx";
import AddUser from "./components/AddUser.jsx";
import EditUser from "./components/EditUser.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

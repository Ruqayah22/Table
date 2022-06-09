import React from "react";
import "./App.css";

// components
import NavBar from "./components/NavBar";
import AllUsers from "./components/AllUser";
import AddUsers from "./components/AddUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/add" element={<AddUsers />} />
        <Route path="/all" element={<AllUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

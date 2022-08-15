import React from "react";

import { AppBar, Toolbar, styled } from "@mui/material";

import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PeopleIcon from "@mui/icons-material/People";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: #ffff;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/" exact="true">
          {/* Home */}
          <HomeIcon />
        </Tabs>
        <Tabs to="/all" exact="true">
          {/* all Users */}
          <PeopleIcon />
        </Tabs>
        <Tabs to="/add" exact="true">
          {/* add Users */}
          <PersonAddAltIcon />
        </Tabs>
        <Tabs to="/allE" exact="true">
          {/* all Users */}
          <PeopleIcon />
        </Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;

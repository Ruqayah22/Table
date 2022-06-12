import React from "react";

import { AppBar, Toolbar, styled } from "@mui/material";

import { NavLink } from "react-router-dom";

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
          test
        </Tabs>
        <Tabs to="/all" exact="true">
          all Users
        </Tabs>
        <Tabs to="/add" exact="true">
          add Users
        </Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;

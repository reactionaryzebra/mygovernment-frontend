import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../../constants/routes";
import Nav from '../../styles/Nav';

const NavBar = ({ user, logged }) => {
  return (
    <Nav>
      <div>
        <NavLink to={routes.HOME}>MyGovernment</NavLink>
      </div>
      <div>
        {logged ? (
          <NavLink to={routes.ACCT}>{user.username}</NavLink>
        ) : (
          <NavLink to={routes.AUTH}>Login</NavLink>
        )}
      </div>
    </Nav>
  );
};

export default NavBar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../../constants/routes";

const NavBar = ({ user, logged }) => {
  return (
    <div>
      <div>MyGovernment</div>
      <div>
        {logged ? (
          <NavLink>{user.username}</NavLink>
        ) : (
          <NavLink to={routes.AUTH}>Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;

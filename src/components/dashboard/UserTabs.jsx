import React from "react";
import { NavLink } from "react-router-dom";

const UserTabs = () => {
  return (
    <ul className="category-navigation">
      <li>
        <NavLink to="/dashboard" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/resetPassword">Reset Password</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/resetEmail">Reset Email</NavLink>
      </li>
    </ul>
  );
};

export default UserTabs;

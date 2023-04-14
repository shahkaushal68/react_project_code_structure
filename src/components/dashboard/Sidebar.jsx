import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user = {} } = useSelector((state) => state.authReducer);

  return (
    <aside>
      <header>
        <div>
          <img
            className="profile-picture"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            alt="user"
          />
          <p>{user?.email}</p>
        </div>
      </header>
      <nav className="side-navigation">
        <ul>
          <li>
            <NavLink to="/dashboard">
              <i className="fa fa-dashboard" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/business">
              <i className="fa fa-ship" />
              Business Info
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

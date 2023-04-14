import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authTypes } from "../../redux/constants";

const UserAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user = {} } = useSelector((state) => state.authReducer);
  const handleLogout = () => {
    dispatch({
      type: authTypes.USER_ADD,
      payload: null,
    });
    localStorage.removeItem("_token");
    navigate("/");
  };
  return (
    <div className="container user">
      <div className="user-card">
        <figure>
          <img
            className="rounded-circle mt-5"
            width="150px"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            alt="user"
          />
        </figure>
        <div className="user-info">
          <div className="name">
            <span>{user?.email}</span>
            <i className="fa fa-star on" />
            <i className="fa fa-star on" />
            <i className="fa fa-star on" />
            <i className="fa fa-star on" />
            <i className="fa fa-star off" />
          </div>
          <div className="user-role">
            Student &nbsp; • <Link to="">Learn more</Link>
          </div>
          <div className="experience-points">
            <i className="fa fa-coffee" />
            8,977 exp
          </div>
        </div>
      </div>
      <div className="action-links">
        <ul>
          <li>
            <Link to="/dashboard/profile" data-title="Edit profile">
              <i className="fa fa-pencil" />
            </Link>
          </li>
          <li>
            <button className="btn" onClick={handleLogout}>
              <i className="fa fa-sign-out" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserAdmin;

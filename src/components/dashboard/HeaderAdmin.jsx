import React from "react";

const HeaderAdmin = () => {
  return (
    <header className="main-head">
      <div className="icons">
        <i className="fa fa-user-md" />
        <i className="fa fa-comments-o" />
        <i className="fa fa-bell-o">
          <span className="number-alert">3</span>
        </i>
      </div>
      <div className="logo">
        <i className="fa fa-rocket" />
      </div>
      <div className="search">
        <input
          type="text"
          name="search"
          placeholder="Type here to search..."
          autoComplete="off"
        />
        <i className="fa fa-search" />
      </div>
    </header>
  );
};

export default HeaderAdmin;

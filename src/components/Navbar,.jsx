// Navbar.js

import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-after-container">
      <div className="navbar-after-components">
        <div className="sidebar-after">
          <div className="content">
            <p>Tugu.</p>
            <div className="sidebar-links">
              {links.map((link) => {
                const { text, path, icon } = link;
                return (
                  <NavLink to={path} key={text} className="nav-link">
                    <span className="icon">{icon}</span>
                    {text}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

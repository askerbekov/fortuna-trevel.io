import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <div class="nav">
        <ul>
          <li class="home">
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li class="tutorials">
            {" "}
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li class="about">
            {" "}
            <NavLink
              activeClassName="active"
              to={{
                pathname: "/services",
                hash: "services"
              }}
            >
              Services
            </NavLink>
          </li>
          <li class="news">
            {" "}
            <NavLink activeClassName="active" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li class="contact">
            {" "}
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>{" "}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;

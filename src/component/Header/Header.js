import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import icon from "../../images/icon.png";
import logo from "../../images/logo.png";

const Header = () => {
  let active = {
    fontWeight: "bold",
    color: "red",
    textDecoration: "none",
  };

  return (
    <div className="flex">
      <div>
        <img className="logo" src={logo} alt="" />
      </div>
      <nav className="nv">
        <NavLink className="link" exact to="/" activeStyle={active}>
          Home
        </NavLink>
        <NavLink className="link" to="/services" activeStyle={active}>
          Services
        </NavLink>
        <NavLink className="link" to="/admission" activeStyle={active}>
          Admission
        </NavLink>
        <NavLink className="link" to="about" activeStyle={active}>
          About Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;

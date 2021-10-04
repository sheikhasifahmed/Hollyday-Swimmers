import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import icon from "../../images/icon.png";

const Header = () => {
  let active = {
    fontWeight: "bold",
    color: "red",
    textDecoration: "none",
  };

  let black = { color: "green", fontWeight: 500, textDecoration: "none" };

  return (
    <div>
      <nav className="nv">
        <NavLink style={black} exact to="/" activeStyle={active}>
          Home
        </NavLink>
        <NavLink style={black} to="/services" activeStyle={active}>
          Services
        </NavLink>
        <NavLink style={black} to="/admission" activeStyle={active}>
          Admission
        </NavLink>
        <NavLink style={black} to="about" activeStyle={active}>
          About Us
        </NavLink>
      </nav>
      <div className="flex">
        <img className="icon" src={icon} alt="" />
        <div>
          <h1 className="mz">Holiday Swimming</h1>
          <h3 className="mz">A Complete Swimming Training Academy</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;

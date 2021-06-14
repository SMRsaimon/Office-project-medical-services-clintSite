import React from "react";
import "./NevigationMenu.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  const isActive = {
   

    color: "purple",
  };

  return (
    <>
      <nav className="shadow" id="navigation">
        <div className="wrapper">
          <div className="logo">
            <NavLink to="/">Logo</NavLink>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label for="close-btn" className="btn close-btn">
              <ImCross />
            </label>

            <li>
              <NavLink activeStyle={isActive} to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={isActive} to="/shop">
                Shop{" "}
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={isActive} to="/periodTracker">
                Period Tracker
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={isActive} to="/blog">
                Blog
              </NavLink>
            </li>
          </ul>
          <label for="menu-btn" className="btn menu-btn">
            <HiOutlineMenuAlt1 />
          </label>
        </div>
      </nav>
    </>
  );
};

export default NavigationMenu;

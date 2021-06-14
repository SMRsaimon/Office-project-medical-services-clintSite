import React, { useState } from "react";
import "./NevigationMenu.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {

  const [mobileNave, setMobileNave] = useState(false)


console.log(mobileNave)

  const isActive = {
   

    color: "purple",
  };

  return (
   
      <nav  id="navigation">
        <div className="wrapper">
          <div className="logo">
            <NavLink to="/">Logo</NavLink>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
         
          <ul className={!mobileNave?"custom-nav-links" :"custom-nav-links navigation-none"}  >
            <label for="close-btn" className="btn close-btn">
              <ImCross />
            </label>
           
            <li onClick={()=>setMobileNave(true)}>
              <NavLink activeStyle={isActive} to="/home">
                Home
              </NavLink>
            </li>
           
            <li onClick={()=>setMobileNave(true)} >
              <NavLink activeStyle={isActive} to="/shop">
                Shop{" "}
              </NavLink>
            </li>
            <li onClick={()=>setMobileNave(true)} >
              <NavLink activeStyle={isActive} to="/periodTracker">
                Period Tracker
              </NavLink>
            </li>
            <li onClick={()=>setMobileNave(true)} >
              <NavLink activeStyle={isActive} to="/blog">
                Blog
              </NavLink>
            </li>
          </ul>
          <label onClick={()=>setMobileNave(false)} for="menu-btn" className={!mobileNave?"btn menu-btn":"btn menu-btn navigation-block " } >
            <HiOutlineMenuAlt1 />
          </label>
        </div>
      </nav>
    
  );
};

export default NavigationMenu;

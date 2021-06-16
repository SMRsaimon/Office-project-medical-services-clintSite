import React from "react";
import { Link } from "react-router-dom";
import "./AdminSiteBar.css";
import * as AiIcons from "react-icons/ai";
import { BsPersonCheck } from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import { FaSlidersH } from "react-icons/fa";
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent,Menu,MenuItem,SubMenu  } from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';

const AdminSiteBar = () => {



  return (
    <ProSidebar>
    <SidebarHeader>

      <Menu>
        <MenuItem>
        Logo
        <Link to="/" />
        
        </MenuItem>
      </Menu>
      
    </SidebarHeader>
    <SidebarContent>
    <Menu >
    <MenuItem icon={<BsPersonCheck />}>Add Admin
    <Link to="/" />
    </MenuItem>
    <SubMenu title="Blog" icon={<ImBlog />}>
      <MenuItem>Artical 
      <Link to="/" />
      </MenuItem>
      <MenuItem> Video
      <Link to="/" />
       </MenuItem>
    </SubMenu>
    <MenuItem icon={<FaSlidersH />}>Slider

    <Link to="/" />
    </MenuItem>
  </Menu>
     
    </SidebarContent>
    {/* <SidebarFooter>
      
    </SidebarFooter> */}
  </ProSidebar>
  
   
  )
};

export default AdminSiteBar;


// {/* <div className="deshboard">
// <ul>
//   <li className="deshboardLogoContainer">
//     <Link to="/">
//       <img className="card-img-top" src="https://expert-themes.com/newwp/globex/wp-content/uploads/2020/11/logo.svg" alt="profile" />
//     </Link>
//   </li>


//       <li>
//         <Link to="/addminOrderList"> Order List</Link>
//       </li>
//       <li>
//         <Link to="/addProduct">Add product</Link>
//       </li>
//       <li>
//         <Link to="/addAdmin">Make Admin</Link>
//       </li>
//       <li>
//         <Link to="/manageProduct">Manage Products</Link>
//       </li>
 
 

// </ul>
// </div> */}
import React from "react";
import { Link, Switch, useRouteMatch, Route } from "react-router-dom";
import "./AdminSiteBar.css";
import * as AiIcons from "react-icons/ai";
import { BsPersonCheck } from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import { FaSlidersH } from "react-icons/fa";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";
import Test from "../Test";
import AdminDeshBoard from "../AdminDeshBoard/AdminDeshBoard";
import Artical from "../ManageBlog/Artical/Artical";
import Video from "../ManageBlog/Video/Video";

const AdminSiteBar = () => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <div className="container-fluid admin-header"></div>
     <div className="container-fluid row">
        <div className="col-md-4 sidebar-container">
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
              <Menu>
                <MenuItem icon={<BsPersonCheck />}>
                  Make Admin
                  <Link to={`${url}/makeAdmin`} />
                </MenuItem>
                <SubMenu title="Blog" icon={<ImBlog />}>
                  <MenuItem>
                    Artical
                    <Link to={`${url}/artical`} />
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    Video
                    <Link to={`${url}/video`} />
                  </MenuItem>
                </SubMenu>
                <MenuItem icon={<FaSlidersH />}>
                  Slider
                  <Link to={`${url}/slider`} />
                </MenuItem>
              </Menu>
            </SidebarContent>
            {/* <SidebarFooter>
  
</SidebarFooter> */}
          </ProSidebar>
        </div>
        <div className="col-md-8 ">
          <Switch>
            <Route exact path={path}></Route>
            <Route path={`${path}/artical`}>
              <Artical />
            </Route>
            <Route path={`${path}/video`}>
              <Video />
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <AdminDeshBoard />
            </Route>
          </Switch>
        </div>
     
      </div>
    </>
  );
};

export default AdminSiteBar;



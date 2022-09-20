import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
} from "reactstrap";
import "./nav.css";

const CommonNav = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [modal, setModal] = useState(false);

  const toggle1 = () => setModal(!modal);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="Nav">
      <Navbar className="navbar">
        <div className="nav-icon">
          <img
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSaIRjxVFJMUTJSCxYYYXlbBxZjJciUZDiCg&usqp=CAU"
            className="navbar-image"
          />
        </div>
        {/* <Button id="Popover1" type="button" className="nav-profile">
        A
      </Button> */}
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>A</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link className="nav-link" to="/user/:id">
                My Profile
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className="nav-link" to="/login">
                LogOut
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Navbar>
      <div className="book-container">
        <ProSidebar>
          <SidebarHeader>
            <h5 className="sidenav-header">Welcome to Josh Library</h5>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem>
                <Link to="/book" /> Home
              </MenuItem>
              <MenuItem>
                <Link to="/user/:id" /> Profile
              </MenuItem>
              <MenuItem>
                <Link to="/user" /> All Users
              </MenuItem>
              <MenuItem>
                <Link to="/issue" />
                Issue Book
              </MenuItem>
              <MenuItem>
                <Link to="/user/:id/book" />
                History
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
        <div className="container-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default CommonNav;

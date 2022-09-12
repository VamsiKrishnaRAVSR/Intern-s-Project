import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { Book as BookType, BookDetailsList } from "../../types/book.types";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Navbar,
} from "reactstrap";
import "./book.css";
import CommonBook from "../commonBookComponent/commonBook";
import { useGetBooks } from "../../hooks/Book.hooks";
import Loader from "../Loader/loader";

const Book = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle1 = () => setModal(!modal);
  const { isLoading, data } = useGetBooks();
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const initialValues: BookType = {
    name: "",
    prize: 0,
    category: "",
  };

  const onSubmit = () => {};

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
                <Link to="/user/:userId/book/:bookId" />
                Issue Book
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
        <div className="book-main-container">
          <div>
            <Button onClick={toggle1}>Add new Book</Button>
            <Modal isOpen={modal} toggle={toggle1}>
              <ModalHeader toggle={toggle1}>Add/Edit Book</ModalHeader>
              <ModalBody>
                <CommonBook initialValues={initialValues} onSubmit={onSubmit} />
              </ModalBody>
            </Modal>
          </div>
          <div className="container-body">
            {isLoading ? (
              <Loader />
            ) : (
              data?.map((ele: BookDetailsList) => (
                <Card className="card-container">
                  <img
                    alt="Sample"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqABo13DP4bwMvpCALNNDyW89lbTSZPINFxz4G5xfCMA&s"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{ele.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {ele.category}
                    </CardSubtitle>
                    <CardText>{ele.prize}</CardText>
                  </CardBody>
                </Card>
              ))
            )}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Book;

// {/* <div>
//   <Button id="Popover1" type="button">
//     Launch Popover
//   </Button>
// <Popover
//   flip
//   placement="bottom"
//   target="Popover1"
//   toggle={function noRefCheck() {}}
// >
//   <PopoverHeader>Popover Title</PopoverHeader>
//   <PopoverBody>
//     Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque
//     ornare sem lacinia quam venenatis vestibulum.
//   </PopoverBody>
// </Popover>
// </div>; */}

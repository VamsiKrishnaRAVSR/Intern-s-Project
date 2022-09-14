import React, { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import { Book as BookType, BookDetailsList } from "../../types/book.types";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import "./book.css";
import CommonBook from "../commonBookComponent/commonBook";
import { useCreateBook, useDeleteBook, useGetBooks } from "../../hooks/Book.hooks";
import Loader from "../Loader/loader";
import { Link } from "react-router-dom";

const Book = () => {
  const { isLoading, data } = useGetBooks();
  const { mutate } = useCreateBook();

  const initialValues: BookType = {
    name: "",
    prize: 0,
    category: "",
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle1 = () => setModal(!modal);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const onSubmit = (data: BookType) => {
    toggle1();
    console.log(data);

    mutate(data);
  };

  return (
    <div className="Nav">
      <div className="book-main-container">
        <div className="book-button-container">
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
              <Link to={`/book/${ele.id}`}>
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
              </Link>
            ))
          )}
        </div>
        <div></div>
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

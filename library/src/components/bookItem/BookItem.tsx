import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, ModalBody, ModalHeader, Modal } from "reactstrap";
import {
  useDeleteBook,
  useGetBook,
  useUpdateBook,
} from "../../hooks/Book.hooks";
import CommonBook from "../commonBookComponent/commonBook";
import "./bookitem.css";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqABo13DP4bwMvpCALNNDyW89lbTSZPINFxz4G5xfCMA&s";

const BookItem = () => {
  const params = useParams();
  const { id } = params;
  const data = useGetBook(id);

  const { mutate } = useUpdateBook();
  const [updateDataModal, setUpdateDataModal] = useState(false);
  const updateBookToggle = () => setUpdateDataModal(!updateDataModal);
  const { mutate: deleteBooks } = useDeleteBook();

  const initialValues = useMemo(
    () => ({
      id: id,
      name: data?.name,
      prize: data?.prize,
      category: data?.category,
    }),
    [data, id]
  );

  const availabilitystyles = data?.status ? "green" : "red";
  return (
    <div className="book-item-container">
      <div className="book-item-image-container">
        <img className="book-item-image" src={img} alt="dummyImage" />
      </div>
      <div className="book-item-text">
        <h3 className={`${availabilitystyles}`}>
          {data?.status ? `Available` : `Not Available`}
        </h3>
        <h1>{data?.name}</h1>
        <p>Price: {data?.prize}</p>
        <p>Category: {data?.category}</p>
        <div>
          <Modal isOpen={updateDataModal} toggle={updateBookToggle}>
            <ModalHeader toggle={updateBookToggle}>Add/Edit Book</ModalHeader>
            <ModalBody>
              <CommonBook
                initialValues={initialValues}
                onSubmit={(data) => {
                  updateBookToggle();
                  return mutate(data);
                }}
              />
            </ModalBody>
          </Modal>
          <Button
            onClick={updateBookToggle}
            className="book-item-buttons"
            color="warning"
          >
            Update the book
          </Button>
          <Button
            onClick={() => deleteBooks(id)}
            className="book-item-buttons"
            color="danger"
          >
            Delete the book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;

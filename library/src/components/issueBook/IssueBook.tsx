import React, { useState } from "react";
import Select from "react-select";
import { Button, Form, FormGroup } from "reactstrap";
import { useGetBooks, usePostBookUser } from "../../hooks/Book.hooks";
import { useGetUsers } from "../../hooks/User.hooks";
import { BookDetailsList } from "../../types/book.types";
import { API_BOOK_ROUTES } from "../../constants/APIConstants";
import { userData } from "../../types/user.types";

const IssueBook = () => {
  const { data: Books } = useGetBooks();
  const { data: Users } = useGetUsers();
  const { mutate } = usePostBookUser();
  const availableBooks = Books?.filter((ele: BookDetailsList) => ele.status);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const selectedUsersArray = Users?.map((ele: userData) => {
    const p = { label: ele.email, value: ele.id };
    return p;
  });

  const selectAvailableBooksArray = availableBooks?.map(
    (ele: BookDetailsList) => {
      const p = { label: ele.name, value: ele.id };
      return p;
    }
  );

  const updateDetails = () => {
    const userId = selectedUser.value;
    const bookId = selectedBook.value;
    console.log(userId);
    console.log(bookId);

    const api = API_BOOK_ROUTES.ISSUE_BOOK.replace(":userId", userId).replace(
      ":bookId",
      bookId
    );
    mutate(api);
  };

  

  return (
    <div>
      <h1>Book Issue Counter</h1>
      <Form>
        <FormGroup>
          <label id="user">Select the book</label>
          <Select
            id="book"
            defaultValue={selectedBook}
            onChange={setSelectedBook}
            options={selectAvailableBooksArray}
          />
        </FormGroup>
        <FormGroup>
          <label id="user">Select a User</label>
          <Select
            id="user"
            placeholder="Select a User"
            defaultValue={selectedUser}
            onChange={setSelectedUser}
            options={selectedUsersArray}
          />
        </FormGroup>
        <Button onClick={() => updateDetails()}>Submit</Button>
      </Form>
    </div>
  );
};

export default IssueBook;

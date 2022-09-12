import axios from "axios";
import { API_BOOK_ROUTES } from "../constants/APIConstants";
import { Book } from "../types/book.types";
import { sleep, updateURL } from "./common.services";

export const createBook = (data: Book) => {
  sleep().then(() => axios.post(API_BOOK_ROUTES.CREATE_BOOK, data));
};

export const updateBook = (data: Book) => {
  return sleep().then(() => axios.patch(API_BOOK_ROUTES.UPDATE_BOOK, data));
};

export const deleteBook = (id: number) => {
  return sleep().then(() =>
    axios.delete(updateURL(API_BOOK_ROUTES.DELETE_BOOK, id))
  );
};

export const getBooks = () => {
  return sleep().then(() =>
    axios.get(API_BOOK_ROUTES.GET_BOOKS).then((data) => data.data[0].data)
  );
};

export const getBookHistory = () => {
  sleep().then(() => axios.get(API_BOOK_ROUTES.BOOK_HISTORY));
};

//HOW TO DO this

export const issueBook = (userId: number, bookId: number) => {
  const api = API_BOOK_ROUTES.ISSUE_BOOK.replace(
    "/:id",
    String(userId)
  ).replace("/:bookId", String(bookId));
  sleep().then(() => axios.post(api));
};

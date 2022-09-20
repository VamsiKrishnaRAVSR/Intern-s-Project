import axios from "axios";
import { API_BOOK_ROUTES } from "../constants/APIConstants";
import { Book } from "../types/book.types";
import { sleep, updateURL } from "./common.services";
import { v4 as uuidv4 } from "uuid";

export const updateMockData = (data: Book) => {
  return {
    id: data.id !== undefined ? data.id : uuidv4(),
    name: data.name,
    prize: data.prize,
    category: data.category,
    status: true,
    created_by: "mrawling2@youku.com",
    created_at: "1034132335000",
    updated_by: "hpover2@un.org",
    updated_at: "1325602845000",
  };
};

export const createBook = (data: Book) => {
  const updatedData = updateMockData(data);

  return sleep().then(() =>
    axios.post(API_BOOK_ROUTES.CREATE_BOOK, updatedData)
  );
};

export const updateBook = (data: Book) => {
  const updatedData = updateMockData(data);
  const api = API_BOOK_ROUTES.UPDATE_BOOK.replace(":id", data.id);
  return sleep().then(() => axios.put(api, updatedData));
};

export const deleteBook = (id: string) => {
  // const api = API_BOOK_ROUTES.DELETE_BOOK.replace(":id", String(id));
  return sleep().then(() =>
    axios.delete(updateURL(API_BOOK_ROUTES.DELETE_BOOK, id))
  );
};

export const getBooks = () => {
  return sleep().then(() =>
    axios.get(API_BOOK_ROUTES.GET_BOOKS).then((data) => {
      return data.data;
    })
  );
};

export const getBookHistory = () => {
  return sleep().then(() => axios.get(API_BOOK_ROUTES.BOOK_HISTORY));
};

//HOW TO DO this

export const issueBook = (api: string) => {
  return sleep().then(() => axios.post(api));
};

export const getBook = (id: string) => {
  const api = API_BOOK_ROUTES.GET_BOOK.replace(":id", String(id));
  return sleep().then(() =>
    axios.get(api).then((data) => {
      return data.data;
    })
  );
};

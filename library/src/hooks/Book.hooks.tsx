import { useMutation, useQuery } from "react-query";
import { BOOK_QUERY_CONSTANTS } from "../constants/queryConstants";
import {
  createBook,
  deleteBook,
  getBookHistory,
  getBooks,
  updateBook,
} from "../services/book.services";
import { Book } from "../types/book.types";

export const useCreateBook = () => {
  return (data: Book) => createBook(data);
};

export const useUpdateBook = () => {
  return useMutation((data: Book) => updateBook(data));
};

export const useDeleteBook = () => {
  return useMutation(deleteBook);
};

export const useGetBooks = () => {
  return useQuery([BOOK_QUERY_CONSTANTS.GET_BOOKS], () => getBooks());
};

export const useGetBookHistory = () => {
  return useQuery([BOOK_QUERY_CONSTANTS.GET_BOOK_HISTORY], () =>
    getBookHistory()
  );
};

// export const

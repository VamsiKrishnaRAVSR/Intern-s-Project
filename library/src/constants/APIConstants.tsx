export const API_USER_ROUTES = {
  LOGIN_USER: "http://localhost:4000/login",
  GET_USERS: "http://localhost:4000/user",
  POST_USER: "http://localhost:4000/user",
  PUT_USER: "http://localhost:4000/user",
  PATCH_USER: "http://localhost:4000/user/:id",
  GET_USER: "http://localhost:4000/user/:id",
  DELETE_USER: "http://localhost:4000/user/:id",
  CREATE_USER: "http://localhost:4000/user",
};

export const API_BOOK_ROUTES = {
  CREATE_BOOK: "http://localhost:4000/book",
  GET_BOOKS: "http://localhost:4000/book",
  GET_BOOK: "http://localhost:4000/book/:id",
  UPDATE_BOOK: "http://localhost:4000/book/:id",
  DELETE_BOOK: "http://localhost:4000/book/:id",
  BOOK_HISTORY: "http://localhost:4000/user/:id/book",
  ISSUE_BOOK: "http://localhost:4000/user/:id/book/:bookId",
};

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Book from "./components/book/Book";
import BookItem from "./components/bookItem/BookItem";
import Categories from "./components/categories/Categories";
import IssueBook from "./components/issueBook/IssueBook";
import Login from "./components/Login/Login";
import Profile from "./components/profile/Profile";
import User from "./components/user/User";
import Users from "./components/Users/Users";
import "bootstrap/dist/css/bootstrap.css";
import CommonNav from "./components/Nav/CommonNav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<Book />} />
          <Route path="/book/:id" element={<BookItem />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/user" element={<Users />} />
          <Route path="/user/:id" element={<User />} />

          {/* doubts */}
          <Route path="/user/:userId/book/:bookId" element={<IssueBook />} />
          {/* for post request but no body is specified */}

          {/* 2. /user/<user_id>/book -> doubt */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

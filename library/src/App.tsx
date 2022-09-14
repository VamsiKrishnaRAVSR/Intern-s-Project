import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  // const [value, change] = useReducer((s) => s + 1, 0);
  return (
    <div className="App">
      {/* <button onClick={change}>{value}</button> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<CommonNav />}>
            <Route path="/book" element={<Book />} />
            <Route path="/book/:id" element={<BookItem />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/user" element={<Users />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/user/:userId/book/:bookId" element={<IssueBook />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

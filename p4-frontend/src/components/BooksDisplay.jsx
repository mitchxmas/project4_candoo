import React, { useEffect, useRef, useState, useContext } from "react";
import Book from "./Book";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";

const BooksDisplay = () => {
  const userCtx = useContext(UserContext);
  const [books, setBooks] = useState([]);

  const titleRef = useRef();
  const authorRef = useRef();
  const yearRef = useRef();

  // no need for a token: get is unprotected information...
  const getBooks = async () => {
    const { ok, data } = await fetchData("/lesson/books", userCtx.accessToken);

    if (ok) {
      setBooks(data);
    } else {
      console.log(data);
    }
  };

  const addBook = async () => {
    const { ok, data } = await fetchData(
      "/lesson/books",
      userCtx.accessToken,
      "PUT",
      {
        title: titleRef.current.value,
        author: authorRef.current.value,
        year: yearRef.current.value,
      }
    );

    if (ok) {
      getBooks();
    } else {
      console.log(data);
    }
  };

  const deleteBook = async (id) => {
    const { ok, data } = await fetchData(
      "/lesson/books/" + id,
      userCtx.accessToken,
      "DELETE"
    );

    if (ok) {
      getBooks();
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-md-6">Book List</h1>
      </div>

      {userCtx.role === "admin" && (
        <div className="row">
          <input
            type="text"
            ref={titleRef}
            placeholder="title"
            className="col-md-3"
          />
          <input
            type="text"
            ref={authorRef}
            placeholder="author"
            className="col-md-3"
          />
          <input
            type="text"
            ref={yearRef}
            placeholder="year published"
            className="col-md-3"
          />
          <button className="col-md-3" onClick={addBook}>
            add
          </button>
        </div>
      )}

      <br />
      <br />

      <div className="row">
        <div className="col-md-3">Title</div>
        <div className="col-md-3">Author</div>
        <div className="col-md-2">Year Published</div>
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>
      </div>

      {books.map((item) => {
        return (
          <Book
            key={item._id}
            id={item._id}
            title={item.title}
            author={item.author}
            yearPublished={item.year_published}
            deleteBook={deleteBook}
            getBooks={getBooks}
          />
        );
      })}
    </div>
  );
};

export default BooksDisplay;

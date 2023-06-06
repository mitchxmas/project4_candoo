import React, { useEffect, useRef, useState, useContext } from "react";
import Book from "./Book";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";

const BooksDisplay = () => {
  const userCtx = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const [services, setServices] = useState([]);

  const titleRef = useRef();
  const authorRef = useRef();
  const yearRef = useRef();

  // no need for a token: get is unprotected information...
  const getBooks = () => {
    const data = [
      {
        id: 1,
        title: "Interview With a Vampire",
        author: "Anne Rice",
        year_published: 1925,
      },
      {
        id: 2,
        title: "Dune",
        author: "Frank Herbert",
        year_published: 1965,
      },
      {
        id: 3,
        title: "Gone Girl",
        author: "Gillian Flynn",
        year_published: 2012,
      },
      {
        id: 4,
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        year_published: 1934,
      },
      {
        id: 5,
        title: "IT",
        author: "Stephen King",
        year_published: 1986,
      },
      {
        id: 6,
        title: "The Hobbit",
        author: "J.R.R. Tolkin",
        year_published: 1996,
      },
      {
        id: 7,
        title: "test2",
        author: "test321",
        year_published: 2020,
      },
    ];
    setBooks(data);
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

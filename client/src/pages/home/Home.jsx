import React from "react";
import { useEffect } from "react";
import "./home.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const location = useLocation();

  const fetchBooks = async (category) => {
    try {
      // console.log(category);
      await axios
        .get(`/books/getBooks${category}`)
        .then((res) => {
          setBooks(res.data);

          // Fetch User Details
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            "Books fetching failed with status code: " + err.response.status
          );
        });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    const category = location.search;
    fetchBooks(category);
  }, [location]);

  return (
    <div className="book-container">
      <Toaster />
      {books?.map((book) => (
        <div className="book" key={book._id}>
          <div className="cover">
            <img src={book.image} alt="" className="bookCover" />
          </div>
          <div className="bookInfo">
            <div className="bookTitle">{book.title}</div>
            <div className="bookDesc">{book.description}</div>
            <div className="bookAuthor">
              Author: <span>{book.author}</span>
            </div>
            <div className="bookUploader">
              Uploader: <span>{book.user.name}</span>
            </div>
            <div className="bookButtons">
              <a className="bookLink" href={book.bookUrl}>
                Read
              </a>
              <a
                className="bookLink"
                href={book.bookUrl}
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

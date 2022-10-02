import React from "react";
import "./home.css";

const Home = () => {
  const books = [
    {
      _id: 1,
      username: "Safak Kocaoglu",
      uploader: "Admin",
      title: "Lorem ipsum dolor sit amet.",
      cover:
        "https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      _id: 2,
      username: "Safak Kocaoglu",
      uploader: "Admin",
      title: "Lorem ipsum dolor sit amet.",
      cover:
        "https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      _id: 3,
      username: "Safak Kocaoglu",
      uploader: "Admin",
      title: "Lorem ipsum dolor sit amet.",
      cover:
        "https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      _id: 4,
      username: "Safak Kocaoglu",
      uploader: "Admin",
      title: "Lorem ipsum dolor sit amet.",
      cover:
        "https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
  ];
  return (
    <div className="book-container">
      {books.map((book) => (
        <div className="book" key={book._id}>
          <div className="cover">
            <img src={book.cover} alt="" className="bookCover" />
          </div>
          <div className="bookInfo">
            <div className="bookTitle">{book.title}</div>
            <div className="bookAuthor">{`Author: ${book.username}`}</div>
            <div className="bookUploader">{`Uploader: ${book.uploader}`}</div>
            <div className="bookButtons">
              <a className="bookLink" href={book.pdf}>
                Read
              </a>
              <a
                className="bookLink"
                href={book.pdf}
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

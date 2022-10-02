import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Upload = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="book-container">
        <h3>Upload Books</h3>
        <div className="form">
          <div className="book-name">
            <label htmlFor="name" className="name">
              Book name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Title of the book"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Upload;

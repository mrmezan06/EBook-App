import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./upload.css";

const Upload = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <h1>Upload Books</h1>
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

          <div className="book-name">
            <label htmlFor="author" className="author">
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="Author of the book"
            />
          </div>
          <div className="book-name">
            <label htmlFor="description" className="description">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              cols="10"
              placeholder="Description of the book"
            ></textarea>
          </div>
          <div className="book-name">
            <label htmlFor="category" className="category">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Category of the book. Eg: Fiction, Non-Fiction, etc."
            />
          </div>
          <div className="book-name">
            <label htmlFor="image" className="image">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="Image URL of the book"
            />
          </div>
          <div className="book-submit">
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Upload;

import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Registration = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <h1>Registration</h1>
        <div className="form">
          <div className="book-name">
            <label htmlFor="name" className="name">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Full Name"
            />
          </div>

          <div className="book-name">
            <label htmlFor="email" className="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="book-name">
            <label htmlFor="password" className="password">
              Password
            </label>
            <input
              type="pasword"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="book-name">
            <label htmlFor="confirm" className="confirm">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              placeholder="Confirm your password"
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

export default Registration;

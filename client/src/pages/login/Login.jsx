import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import "./login.css";

const Login = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <h1>Login</h1>
        <div className="form">
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
            <Link to={"/register"} className="registerLink">
              Don't have an account? <span>Register</span>
            </Link>
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

export default Login;

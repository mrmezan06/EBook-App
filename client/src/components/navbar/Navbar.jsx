import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import UserMenu from "../userMenu/UserMenu";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="logo">
        <Link className="link" to="/">
          <FontAwesomeIcon icon={faHouse} className="fIcon" />
        </Link>
      </div>

      <div className="menu">
        <Link to="/?cat=programming" className="link">
          Programming
        </Link>
        <Link to="/?cat=science" className="link">
          Science
        </Link>
        <Link to="/?cat=bcs" className="link">
          Mathematics
        </Link>
        <Link to="/?cat=history" className="link">
          History
        </Link>
        <div className="userLogo">
          <UserMenu className="link" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./userMenu.css";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  // Fetch user data from local storage
  const userId = localStorage.getItem("userID");

  const [loggedIn, setLoggedIn] = useState(false);
  if (userId) {
    setLoggedIn(true);
  }

  const handleLogout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    console.log("All data removed from local storage");
  };

  return (
    <div className="userMenu">
      <FontAwesomeIcon
        icon={showMenu ? faXmark : faBars}
        className="menuIcon"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
      {/* Menu Item */}
      {showMenu && (
        <div className="menuItems">
          <Link to="/search" className="userlink">
            Search
          </Link>
          <Link
            to={loggedIn ? `/upload/${userId}` : "/login"}
            className="userlink"
          >
            Upload
          </Link>
          <Link to="/profile" className="userlink">
            Profile
          </Link>
          <Link to={"/login"} onClick={handleLogout} className="userlink">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

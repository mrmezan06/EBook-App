import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./userMenu.css";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
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
          <Link to="upload" className="userlink">
            Upload
          </Link>
          <Link to="profile" className="userlink">
            Profile
          </Link>
          <Link to="login" className="userlink">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

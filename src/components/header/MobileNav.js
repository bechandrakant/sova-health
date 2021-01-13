import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="menu">
      {isActive ? (
        <ul>
          <li onClick={() => setIsActive(!isActive)}>
            <CloseIcon style={{ fontSize: 48, color: "white" }} />
          </li>
          <li onClick={() => setIsActive(!isActive)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setIsActive(!isActive)}>
            <Link to="/how-it-works">How it works</Link>
          </li>
          <li onClick={() => setIsActive(!isActive)}>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li onClick={() => setIsActive(!isActive)}>
            <Link to="/science">science</Link>
          </li>
          <li onClick={() => setIsActive(!isActive)}>
            <Link to="/faq">FAQ</Link>
          </li>
          <li onClick={() => setIsActive(!isActive)}>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      ) : (
        <MenuIcon
          style={{ fontSize: 48, color: "white" }}
          onClick={() => setIsActive(!isActive)}
          className="menu-icon"
        />
      )}
    </div>
  );
};

export default MobileNav;

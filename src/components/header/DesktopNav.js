import React from "react";
import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/how-it-works">How it works</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing</Link>
      </li>
      <li>
        <Link to="/science">science</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
      <li>
        <Link to="/about-us">About us</Link>
      </li>
    </ul>
  );
};

export default DesktopNav;

import React, { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import "./header.scss";

const Header = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.matchMedia("(max-width: 768px)").matches)
    );
  });

  return (
    <header>
      <nav className="container">
        <img src="./sova_logo.webp" alt="sova health" />
        {isMobile ? <MobileNav /> : <DesktopNav />}
        <button>Get Started</button>
      </nav>
    </header>
  );
};

export default Header;

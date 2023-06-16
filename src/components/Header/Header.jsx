import React, { useEffect, useState } from "react";

import "./Header.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // hides header on down scroll and shows on up scroll
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledUp = prevScrollPos < currentScrollPos;
      setIsScrolled(isScrolledUp);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isScrolled ? "" : "show"}`}>
      <nav className={`header__nav `}>
        <a href="#gallery">Gallery</a>
        <a href="#about">About Us</a>
        <a href="#contacts">Contact</a>
      </nav>
    </div>
  );
};

export default Header;

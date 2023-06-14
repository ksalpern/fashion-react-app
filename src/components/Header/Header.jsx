import React, { useEffect, useState } from "react";

import "./Header.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // on menu click adds nav
  const handleMenuShow = () => {
    setIsScrolled(!isScrolled);
  };

  // hides header on down scroll and shows on up scroll
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledUp = prevScrollPos < currentScrollPos;
      setIsScrolled(isScrolledUp);
      prevScrollPos = currentScrollPos;

      const header = document.querySelector("header");

      if (isScrolledUp) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <nav className={`header__nav ${isScrolled ? "show" : ""}`}>
        <a href="#home">Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#contacts">Contact Us</a>
      </nav>
      <button className="header__btn" onClick={handleMenuShow}>
        menu
      </button>
    </div>
  );
};

export default Header;

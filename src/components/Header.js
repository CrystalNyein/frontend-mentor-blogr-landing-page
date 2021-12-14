import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import CollapseNav from "./CollapseNav";
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuCTARef = useRef(null);
  const menuRef = useRef(null);
  const navLinks = [
    ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
    ["About", "Team", "Blog", "Careers"],
    ["Contact", "Newsletter", "LinkedIn"],
  ];
  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (menuRef.current.classList.contains("active")) {
      menuRef.current.classList.remove("active");
    } else {
      menuRef.current.classList.add("active");
    }
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuCTARef.current.contains(e.target))
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          handleMobileMenu();
        }
    };
    if (mobileMenuOpen)
      document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div className="Header">
      <img id="logo" src={logo} alt="Blogr Logo" role="img" />
      <nav>
        <img
          id="nav-menu"
          ref={menuCTARef}
          src={mobileMenuOpen ? close : hamburger}
          alt=""
          onClick={handleMobileMenu}
        />

        <div className="nav-link-container" ref={menuRef}>
          <div className="nav-links">
            <CollapseNav name="Product" collapse={navLinks[0]} />
            <CollapseNav name="Company" collapse={navLinks[1]} />
            <CollapseNav name="Connect" collapse={navLinks[2]} />
          </div>
          <hr></hr>
          <div className="nav-actions">
            <button className="btn nav-btn f-ubuntu">Login</button>
            <button className="btn primary-btn f-ubuntu">Sign Up</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

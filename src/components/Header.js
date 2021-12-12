import React from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import CollapseNav from "./CollapseNav";

const Header = () => {
  const navLinks = [
    ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
    ["About", "Team", "Blog", "Careers"],
    ["Contact", "Newsletter", "LinkedIn"],
  ];
  return (
    <header className="Header">
      <img id="logo" src={logo} alt="Blogr Logo" />
      <nav>
        <img id="nav-menu" src={hamburger} alt="" />
        <div className="nav-links">
          <CollapseNav name="Product" collapse={navLinks[0]} />
          <CollapseNav name="Company" collapse={navLinks[1]} />
          <CollapseNav name="Connect" collapse={navLinks[2]} />
        </div>
        <hr></hr>
        <div className="nav-actions">
          <button className="btn nav-btn">Login</button>
          <button className="btn nav-btn">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

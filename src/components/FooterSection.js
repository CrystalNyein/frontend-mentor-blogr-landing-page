import React from "react";
import "./FooterSection.css";
import Logo from "../assets/images/logo.svg";

const FooterSection = () => {
  return (
    <footer className="FooterSection">
      <div className="footer-logo">
        <img src={Logo} alt="Blogr Logo"></img>
      </div>
      <div className="footer-links">
        <h4>Product</h4>
        <button className="cta">Overview</button>
        <button className="cta">Pricing</button>
        <button className="cta">Marketplace</button>
        <button className="cta">Features</button>
        <button className="cta">Integrations</button>
      </div>
      <div className="footer-links">
        <h4>Company</h4>
        <button className="cta">About</button>
        <button className="cta">Team</button>
        <button className="cta">Blog</button>
        <button className="cta">Careers</button>
      </div>
      <div className="footer-links">
        <h4>Connect</h4>
        <button className="cta">Contact</button>
        <button className="cta">Newsletter</button>
        <button className="cta">LinkedIn</button>
      </div>
    </footer>
  );
};

export default FooterSection;


import React, { useState } from "react";
import logo from '../../assets/logo.jpg';
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo"><img  className="logoimg" src={logo}/></div>
      <span className="logoname" >ISP AGENCY</span>
      {/* Menu Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#services">Services</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact" className="contact-btn">Contact </a></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

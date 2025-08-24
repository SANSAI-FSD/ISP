import React from 'react';
import './Footer.css';
import LOGO from '../../assets/logo.jpg'; // Ensure the path is correct
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={LOGO} alt="CreatorFlow Logo" className="footer-logo-img" />
          <span>ISP AGENCY</span>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#reviews">Reviews</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: ispagency@gmail.com</p>
          <p>Phone: +91 xxxxxxxx</p>
          <p>Address: 1233, sulur ,cbe</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ISP AGENCY. All rights reserved.</p>
        <p className='developer'><a href='https://portfolio-2t06.onrender.com'>Developed by: SANSAI M</a></p> {/* Add Developed by here */}
      </div>
    </footer>
  );
};

export default Footer;
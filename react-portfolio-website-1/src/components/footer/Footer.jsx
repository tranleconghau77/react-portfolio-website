import React from "react";
import "./footer.scss";
import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

const Footer = () => {
  return <footer id="footer">
    <a href="#" className="footer__logo">EGATOR</a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#porfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
      <a href="https://instagram.com/" target="_blank" rel="noreferrer"><BsInstagram /></a>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer"><BsTwitter /></a>
    </div>

  </footer>;
};

export default Footer;

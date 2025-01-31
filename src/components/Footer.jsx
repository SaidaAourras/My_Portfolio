import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a href="#">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="#">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="#">
          <i className="bx bxl-whatsapp"></i>
        </a>
      </div>
      <ul>
        <li>
          <a href="#">FQA</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>
      <p className="copyright">@ Saida Aourras | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;

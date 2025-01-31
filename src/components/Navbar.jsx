import React from "react";

function Navbar() {
  return (
    <header className="header">
      <a className="logo" href="#home">
        Saida
        <span> Aourras</span>
        <i className="bx bx-menu" id="menu-icon"></i>
      </a>

      <nav className="navbar">
        <a href="#home" className="active nav-link">
          Home
        </a>
        <a href="#aboutMe" className=" nav-link">
          About Me
        </a>
        <a className="nav-link" href="#education">
          Education
        </a>
        <a className="nav-link" href="#services">
          Services
        </a>
        <a className="nav-link" href="#skills">
          Skills
        </a>
        <a className="nav-link" href="#projects">
          Projects
        </a>
        <a className="nav-link" href="#contact">
          contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;

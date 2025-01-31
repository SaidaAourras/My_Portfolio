import React from "react";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, It's <span>Saida</span>
        </h1>
        <h3 className="text-animation">
          I'm a <span></span>
        </h3>
        <p>
          A passionate Web Developer who loves building clean, responsive, and
          user-friendly websites. I specialize in{" "}
          <strong style={{ color: "yellow" }}>Javascript</strong> ,{" "}
          <strong style={{ color: "blue" }}>React js</strong> ,
          <strong style={{ color: "red" }}> Laravel</strong> and enjoy turning
          ideas into reality.
        </p>
        <div className="social-icons">
          <a href="#">
            <i className="bx bxl-github"></i>
          </a>
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
        <div className="btn-group">
          <a href="#" className="btn">
            Hire Me
          </a>
          <a href="#contact" className="btn">
            Contact
          </a>
        </div>
      </div>
      <div className="home-img">
        <img src="images/profile.jpg" alt="profile_SAIDA_AOURRAS" />
      </div>
    </section>
  );
};

export default Home;

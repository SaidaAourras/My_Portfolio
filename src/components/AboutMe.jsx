import React from "react";

const AboutMe = () => {
  return (
    <section className="aboutMe" id="aboutMe">
      <div className="aboutMe-image">
        <div className="img-box">
          <img src="../../public/images/profile3.png" />
        </div>
        <div className="liquid-shape">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="100%"
            id="blobSvg"
          >
            <path fill="#6cbfd6">
              <animate
                attributeName="d"
                dur="20000ms"
                repeatCount="indefinite"
                values="M391.5,295.5Q375,341,336,368Q297,395,240.5,424.5Q184,454,139,409Q94,364,65.5,307Q37,250,43.5,177.5Q50,105,115,69.5Q180,34,247.5,42Q315,50,381,78.5Q447,107,427.5,178.5Q408,250,391.5,295.5Z;
                M418,306Q405,362,359.5,404.5Q314,447,247.5,454.5Q181,462,131,417.5Q81,373,52.5,311.5Q24,250,55.5,190.5Q87,131,137.5,94.5Q188,58,250.5,57.5Q313,57,364,93.5Q415,130,423,190Q431,250,418,306Z;
                M427.5,300Q388,350,350.5,396.5Q313,443,245,458Q177,473,127,424Q77,375,74.5,312.5Q72,250,90.5,198.5Q109,147,148.5,103Q188,59,256.5,39.5Q325,20,374.5,72Q424,124,445.5,187Q467,250,427.5,300Z;
                M443.5,313Q424,376,371.5,419Q319,462,256.5,442.5Q194,423,127.5,405Q61,387,79,318.5Q97,250,77,180Q57,110,115.5,62.5Q174,15,242.5,38.5Q311,62,364,95.5Q417,129,440,189.5Q463,250,443.5,313Z;
                M438.49755,302.99509Q395.98626,355.99019,346.48773,374.97841Q296.9892,393.96663,240.99239,421.98994Q184.99558,450.01325,125.99926,416.50564Q67.00294,382.99804,64.99313,316.49902Q62.98332,250,69.49632,187.00343Q76.00932,124.00687,139.01153,114.02527Q202.01374,104.04367,261.50932,67.51423Q321.00491,30.98479,374.50515,75.99043Q428.0054,120.99607,454.50711,185.49804Q481.00883,250,438.49755,302.99509Z;
                M433.5,319.5Q441,389,372.5,403Q304,417,246,429Q188,441,149,396.5Q110,352,93.5,301Q77,250,97,201.5Q117,153,159,126.5Q201,100,249,103.5Q297,107,355.5,119Q414,131,420,190.5Q426,250,433.5,319.5Z;
                M458.5,323Q451,396,384,426.5Q317,457,259,429.5Q201,402,147.5,383Q94,364,50,307Q6,250,50,193.5Q94,137,139,92.5Q184,48,249,51Q314,54,382.5,79Q451,104,458.5,177Q466,250,458.5,323Z;
                M442.5,299.5Q387,349,342,371Q297,393,249,396.5Q201,400,145,383.5Q89,367,81.5,308.5Q74,250,83,192.5Q92,135,140,97.5Q188,60,249,62.5Q310,65,380.5,84.5Q451,104,474.5,177Q498,250,442.5,299.5Z;
              "
              ></animate>
            </path>
          </svg>
        </div>
      </div>
      <div className="aboutMe-content">
        <p>
          Hi, I'm <span> Saida </span>, a passionate web developer with a love
          for creating interactive and user-friendly websites. My journey into
          coding started with curiosity, building small projects, and gradually
          mastering front-end and back-end technologies. Over the years, I've
          honed my skills in HTML, CSS, JavaScript, and frameworks like React
          and Node.js. I thrive on solving complex problems and enjoy crafting
          seamless digital experiences. Whether it's designing a responsive
          website or optimizing performance, I'm always eager to learn and
          improve. Beyond coding, I love gaming, photography, and staying
          updated with the latest tech trends. I'm excited to take on new
          challenges and collaborate on innovative projects!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

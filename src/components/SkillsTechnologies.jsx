import React, { useState } from "react";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const SkillsTechnologies = () => {
  const [icons] = useState([
    <i className="bx bxl-html5"></i>,
    <i className="bx bxl-css3"></i>,
    <i className="bx bxl-javascript"></i>,
    <i className="bx bxl-react"></i>,
    <i className="bx bxl-php"></i>,
    <i>
      <FaLaravel />
    </i>,
    <i className="bx bxl-bootstrap"></i>,
    <i className="bx bxl-python"></i>,
    <i>
      <SiMysql />
    </i>,
    <i className="bx bxl-mongodb"></i>,
    <i className="bx bxl-java"></i>,
    <i>C</i>,
  ]);

  return (
    <div className="skills" id="skills">
      <div className="skills-track">
        {[...icons, ...icons, ...icons].map((icon, index) => (
          <div key={index} className="icon">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTechnologies;

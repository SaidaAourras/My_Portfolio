import React from "react";
import TimeLine_Item from "./TimeLine_Item";

const Education = () => {
  const infoEducation = {
    "High School": {
      year: 2020,
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
    University: {
      year: 2023,
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
  };

  return (
    <section className="education" id="education">
      <h2 className="heading">Education</h2>
      <div className="timeline-items">
        {Object.entries(infoEducation).map(([key, value]) => (
          <TimeLine_Item
            year={value.year}
            description={value.description}
            level={key}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;

import React from "react";

const TimeLine_Item = ({ year, level, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-date">{year}</div>
      <div className="timeline-content">
        <h3>{level}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimeLine_Item;

import React from "react";

const Heading = ({ heading, p }) => {
  return (
    <div className="heading">
      <h2 className="heading-caption">{heading}</h2>
      {p && <p className="heading-p">{p}</p>}
    </div>
  );
};

export default Heading;

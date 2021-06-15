import React from "react";

const DataTitle = ({ number, heading }) => {
  return (
    <div>
      <h2>
        <span>{number}</span>
      </h2>
      <h3 className="text-center">{heading}</h3>
    </div>
  );
};

export default DataTitle;

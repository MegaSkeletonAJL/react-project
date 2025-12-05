import React from "react";
import "./Title.css";

const Title = ({ subTitle }) => {
  return (
    <div className="title">
      <p>{subTitle}</p>
      <h2></h2>
    </div>
  );
};

export default Title;

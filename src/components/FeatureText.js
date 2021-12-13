import React from "react";
import "./FeatureText.css";

const FeatureText = (props) => {
  return (
    <div className="FeatureText">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default FeatureText;

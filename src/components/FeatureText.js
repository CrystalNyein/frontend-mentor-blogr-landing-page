import React from "react";
import "./FeatureText.css";

const FeatureText = (props) => {
  return (
    <div className="FeatureText">
      <h3 className="feature-title f-overpass">{props.title}</h3>
      <p className="feature-para f-overpass">{props.text}</p>
    </div>
  );
};

export default FeatureText;

import React from "react";
import FeatureText from "./FeatureText";
import "./MainSection.css";
import EditorImg from "../assets/images/illustration-editor-desktop.svg";
import PhoneImg from "../assets/images/illustration-phones.svg";
import { features } from "../constants/Features";

const MainSection = () => {
  return (
    <main className="MainSection">
      <section className="section1">
        <h2 className="f-overpass">Designed for the future</h2>
        <div className="section-body">
          <img className="section-img" src={EditorImg} alt="Editor"></img>
          <div className="section-text">
            <FeatureText title={features[0].title} text={features[0].text} />
            <FeatureText title={features[1].title} text={features[1].text} />
          </div>
        </div>
      </section>
      <section className="section2">
        <img className="deco-img" src={PhoneImg} alt="Phones" />
        <FeatureText title={features[2].title} text={features[2].text} />
      </section>
    </main>
  );
};

export default MainSection;

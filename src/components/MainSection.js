import React from "react";
import FeatureText from "./FeatureText";
import "./MainSection.css";
import EditorImg from "../assets/images/illustration-editor-desktop.svg";
import PhoneImg from "../assets/images/illustration-phones.svg";
import LaptopImg from "../assets/images/illustration-laptop-desktop.svg";
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
        <div className="section-body">
          <img className="section-img" src={PhoneImg} alt="Phones" />
          <FeatureText title={features[2].title} text={features[2].text} />
        </div>
      </section>

      <section className="section3">
        <div className="section-body">
          <img className="section-img" src={LaptopImg} alt="Laptop"></img>
          <div className="section-text">
            <FeatureText title={features[3].title} text={features[3].text} />
            <FeatureText title={features[4].title} text={features[4].text} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;

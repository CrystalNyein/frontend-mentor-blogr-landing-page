import React, { useState } from "react";
import ArrowDown from "../assets/images/icon-arrow-light.svg";
import "./CollapseNav.css";

const CollapseNav = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="CollapseNav">
      <p className="nav-title">{props.name} </p>
      <img className="collapsed" src={ArrowDown} alt=""></img>
      <div className="collapse-container">
        {props.collapse.map((c, i) => (
          <a key={i} href="#">
            {c}{" "}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CollapseNav;

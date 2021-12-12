import React, { useState } from "react";
import ArrowDown from "../assets/images/icon-arrow-light.svg";
import "./CollapseNav.css";

const CollapseNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const openModal = (e) => {
    console.log(e.target);
    setCollapsed(!collapsed);
    e.target.classList.add("collapse");
  };
  return (
    <div className="CollapseNav">
      <p className="nav-title f-overpass" onClick={openModal}>
        {props.name}{" "}
      </p>
      <img className="collapsed" src={ArrowDown} alt=""></img>
      {!collapsed && (
        <div className="collapse-container">
          {props.collapse.map((c, i) => (
            <a key={i} href="#" className="f-overpass">
              {c}{" "}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollapseNav;

import React, { useEffect, useRef, useState } from "react";
import ArrowDown from "../assets/images/icon-arrow-light.svg";
import "./CollapseNav.css";

const CollapseNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const titleRef = useRef(null);
  const collapseRef = useRef(null);
  const imageRef = useRef(null);
  const toggleModal = (e) => {
    setCollapsed(!collapsed);
    if (titleRef.current.classList.contains("underline")) {
      titleRef.current.classList.remove("underline");
    } else {
      titleRef.current.classList.add("underline");
    }
    if (imageRef.current.classList.contains("up-side-down")) {
      imageRef.current.classList.remove("up-side-down");
    } else imageRef.current.classList.add("up-side-down");
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!titleRef.current.contains(e.target))
        if (collapseRef.current && !collapseRef.current.contains(e.target)) {
          toggleModal();
        }
    };
    if (!collapsed) document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div className="CollapseNav">
      <p className="nav-title f-overpass" ref={titleRef} onClick={toggleModal}>
        {props.name}{" "}
      </p>
      <img ref={imageRef} src={ArrowDown} alt=""></img>
      {!collapsed && (
        <div className="collapse-container" ref={collapseRef}>
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

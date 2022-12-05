import React from "react";
import { icons } from "../../assets";
import classes from "./SideBarItems.module.css";

const SideBarNavItems = () => {
  const sideBarNavItems = [
    { name: "dashboard", icon: `${icons.dashboard}` },
    { name: "apprenteceships", icon: `${icons.apprenteceships}` },
    { name: "internships", icon: `${icons.internships}` },
    { name: "jobs", icon: `${icons.jobs}` },
    { name: "settings", icon: `${icons.settings}` },
  ];
  return (
    <div>
      {sideBarNavItems.map((item, idx) => (
        <li className={classes["sidebar-items"]} key={idx}>
          <img src={`${item.icon}`} alt={`${item.name} icon`} /> {item.name}{" "}
        </li>
      ))}
    </div>
  );
};

export default SideBarNavItems;

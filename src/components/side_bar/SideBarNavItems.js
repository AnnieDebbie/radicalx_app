import React from "react";
import { assets } from "../../assets";
import classes from "./SideBarItems.module.css";

const SideBarNavItems = () => {
  const sideBarNavItems = [
    { name: "dashboard", icon: `${assets.icons.dashboard}` },
    { name: "apprenteceships", icon: `${assets.icons.apprenteceships}` },
    { name: "internships", icon: `${assets.icons.internships}` },
    { name: "jobs", icon: `${assets.icons.jobs}` },
    { name: "settings", icon: `${assets.icons.settings}` },
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

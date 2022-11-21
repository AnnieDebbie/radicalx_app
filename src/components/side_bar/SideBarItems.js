import {assets} from "../../assets"

const SideBarItems = () => {
  console.log(assets.icons.dashboard)
  const sideBarItems = [
    { name: "dashboard", icon: `${assets.icons.dashboard}` },
    { name: "apprenteceships", icon: `${assets.icons.apprenteceships}` },
    { name: "internships", icon: `${assets.icons.internships}`} ,
    { name: "jobs", icon: `${assets.icons.jobs}` },
    { name: "settings", icon: `${assets.icons.settings}` },
    // { name: "apprenteceships", icon: "medal-star.svg" },
    // { name: "internships", icon: "book.svg" },
    // { name: "jobs", icon: "briefcase.svg" },
    // { name: "settings", icon: "setting-2.svg" },
  ];
  return (
    <ul>
      {sideBarItems.map((item, idx) => (
        <li key={idx}>
          {/* <img
            src={require("../../assets/icons/briefcase.svg").default}            alt={`${item.name} icon`}
          />{" "} */}
          {/* <img
            src={require(`../../assets/icons/${item.icon}`).default}
            alt={`${item.name} icon`}
          />{" "} */}
          <img
            src={`${item.icon}`}
            alt={`${item.name} icon`}
          />{" "}
          {item.name}{" "}
        </li>
      ))}
    </ul>
  );
};

export default SideBarItems;

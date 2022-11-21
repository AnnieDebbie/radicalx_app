import icons from "../../assets/icons/dashboard-3.svg"

const SideBarItems = () => {
  const sideBarItems = [
    { name: "dashboard", icon: "../../assets/icons/dashboard-3.svg" },
    { name: "apprenteceships", icon: "../../assets/icons/medal-star.svg" },
    { name: "internships", icon: "../../assets/icons/book.svg" },
    { name: "jobs", icon: "../../assets/icons/briefcase.svg" },
    { name: " settings", icon: "../../assets/icons/setting-2.svg" },
  ];
  return (
    <ul>
      {sideBarItems.map((item,idx) => (
        <li key={idx}>
         <img src={item.icon} alt={`${item.name} icon`}/> {item.name}{" "}
        </li>
      ))}
    </ul>
  );
};

export default SideBarItems;

import radicalxLogo from "../../assets/radicalX-black-logo.png";

import classes from "./SideBarItems.module.css";
import SideBarNavItems from "./SideBarNavItems";
import UserBadge from "./UserBadge";

const SideBarItems = () => {
  return (
    <ul className={classes["sidebar-item"]}>
      <div>
        <img
          className={classes["radicalx-logo"]}
          src={radicalxLogo}
          alt="radical X logo"
          title="radical X logo"
        />
        <SideBarNavItems />
      </div>

      <UserBadge classname={classes["user-badge"]} />
    </ul>
  );
};

export default SideBarItems;

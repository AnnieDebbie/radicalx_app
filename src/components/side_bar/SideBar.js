import Card from "../../UI/Card";
import SideBarItems from "./SideBarItems";
import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <aside className={classes["sidebar-container"]}>
      <Card className={classes["sidebar-card"]}>
          <SideBarItems />
      </Card>
    </aside>
  );
};

export default SideBar;

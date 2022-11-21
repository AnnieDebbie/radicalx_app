import radicalxLogo from "../../assets/radicalX-black-logo.png"
import Card from "../../UI/Card"
import SideBarItems from "./SideBarItems"
import classes from "./SideBar.module.css"

const SideBar =()=>{
    return <aside>
        <Card className={classes["sidebar-card"]}>
        <img src={radicalxLogo} alt="radical X logo" title="radical X logo"/>
        <SideBarItems/>

        </Card>
    </aside>
}

export default SideBar
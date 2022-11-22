import classes from "./HomePage.module.css"
import Header from "../components/header/Header"
import SideBar from "../components/side_bar/SideBar"

const HomePage=()=>{
return <div className={classes["homepage-container"]}>
    <SideBar/>
    <Header/>
</div>
}

export default HomePage
import classes from "./HomePage.module.css";
import Header from "../components/header/Header";
import SideBar from "../components/side_bar/SideBar";
import ProgressChart from "../components/Insights/ProgressChart";
import { dummy_data } from "../components/Insights/StatisticsData";
import InsightsSection from "../components/Insights/InsightsSection";

const HomePage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <SideBar />

      <div className={classes["not-side"]}>
      <Header />
      <InsightsSection />

      </div>
    </div>
  );
};

export default HomePage;

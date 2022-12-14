import classes from "./HomePage.module.css";
import Header from "../components/header/Header";
import SideBar from "../components/side_bar/SideBar";
import InsightsSection from "../components/Insights/InsightsSection";
import InternshipTracksTable from "../components/internship_tracks/InternshipTracksTable";

const HomePage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <SideBar />

      <div className={classes["not-side"]}>
        <Header />
        <InsightsSection />
        <InternshipTracksTable />
      </div>
    </div>
  );
};

export default HomePage;

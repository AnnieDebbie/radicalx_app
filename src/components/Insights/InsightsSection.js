import InternshipInsights from "./InternshipInsights";
import classes from "./InternshipInsights.module.css";
import ProgressSegmentButtons from "./ProgressSegmentButtons";
import AllCharts from "./Chart/Charts";

const InsightsSection = () => {
  return (
    <section className={classes["internship-insights-section"]}>
      <InternshipInsights />
      <div className={classes["internship-insights-segment-charts"]}>
        <ProgressSegmentButtons />
        <AllCharts />
      </div>
    </section>
  );
};

export default InsightsSection;

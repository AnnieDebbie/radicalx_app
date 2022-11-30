import InternshipInsights from "./InternshipInsights";
import ProgressChart from "./ProgressChart";
import { dummy_data } from "./StatisticsData";
import classes from "./InternshipInsights.module.css"
import LineChart from "./ChartTesting";

const InsightsSection = () => {
  return (
    <section className={classes["internship-insights-section"]}>
      <InternshipInsights/>
      <LineChart/>
    </section>
  );
};

export default InsightsSection;

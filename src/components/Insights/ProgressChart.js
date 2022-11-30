import LineChart from "./ChartTesting";
import TotalEnrollmentsChart from "./TotalEnrollmentsChart";
import React from "react";
function ProgressChart(props) {
//   const chartDataPoints = [
//     { month: "Mon", value: 0 },
//     { month: "Tue", value: 0 },
//     { month: "Wed", value: 0 },
//     { month: "Thur", value: 0 },
//     { month: "Fri", value: 0 },
//     { month: "Sat", value: 0 },
//     { month: "Sun", value: 0 },
//   ];

//   const chartDataPointsMonth = [
//     { month: "Jan", value: 0 },
//     { month: "Feb", value: 0 },
//     { month: "Mar", value: 0 },
//     { month: "Apr", value: 0 },
//     { month: "May", value: 0 },
//     { month: "Jun", value: 0 },
//     { month: "Jul", value: 0 },
//     { month: "Aug", value: 0 },
//     { month: "Sep", value: 0 },
//     { month: "Oct", value: 0 },
//     { month: "Nov", value: 0 },
//     { month: "Dec", value: 0 },
//   ];

//   const chartDataFull = [
//     { label: "Total Enrollments", ...chartDataPoints },
//     // { label: "Completion", ...chartDataPoints },
//     // { label: "Qualified candidates", ...chartDataPoints },
//     // { label: "Reached out", ...chartDataPoints },
//     // { label: "Interview set", ...chartDataPoints },
//     // { label: "Candidates hired", ...chartDataPoints },
//   ];

//   console.log(chartDataFull[0]);
//   for (const progress of props.statistics) {
//     // console.log(progress);
//     const progressMonth = progress.date.getMonth();
//     const progressDay = progress.date.getDay();
//     // console.log(chartDataPoints[progressMonth]);

//     chartDataPointsMonth[progressMonth].value += progress.numberOfEnrollments;
//     chartDataPoints[progressDay].value += progress.numberOfEnrollments;
//   }
  return (
    <React.Fragment>
      <LineChart />
      {/* <TotalEnrollmentsChart dataPoints={chartDataPoints} />; */}
    </React.Fragment>
  );
}

export default ProgressChart;

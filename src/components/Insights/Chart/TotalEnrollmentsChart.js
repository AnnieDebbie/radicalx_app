import { totalEnrollmentsData } from "./StatisticsData";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "./Chart.css";
import cloneDeep from "lodash/cloneDeep";

const TotalEnrollmentsChart = (props) => {
  const sum = totalEnrollmentsData.reduce((acc, element, idx) => {
    return acc + element.numberOfEnrollments;
  }, 0);
  const optionsExtended = {
    title: {
      display: true,
      text: [sum, "Total Enrollments"],
    },
    min: 0,
    max: 100000,
  };

  const { title, min, max } = optionsExtended;

  const options = cloneDeep(props.options);

  options.scales.x.title = title;
  options.scales.y.max = max;
  options.scales.y.min = min;

  const [chartData, setChartData] = useState({
    // labels: ["", "", "", "", ""],
    labels: totalEnrollmentsData.map((data) => ""),
    datasets: [
      {
        data: totalEnrollmentsData.map((data) => data.numberOfEnrollments),
        fill: {
          target: "origin",
          above: "rgb(102, 95, 239, 0.2)", // And purple above the origin
          below: "rgb(0, 0, 0)", // Area will be white below the origin
        },
      },
    ],
  });


  return <Line className="chart" data={chartData} options={options} />;
};

export default TotalEnrollmentsChart;

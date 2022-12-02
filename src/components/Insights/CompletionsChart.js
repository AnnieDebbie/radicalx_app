import { completionData } from "./StatisticsData";
import { useState } from "react";
import { Line } from "react-chartjs-2";

const CompletionsChart = (props) => {
  const [chartData, setChartData] = useState({
    // labels: ["", "", "", "", ""],
    labels: completionData.map((data) => ""),
    datasets: [
      {
        data: completionData.map((data) => data.numberOfCompletions),
        // pointBackgroundColor: "#f8dfff",
        fill: {
          target: "origin",
          above: "rgb(102, 95, 239, 0.2)", // And blue below the origin
          below: "rgb(0, 0, 0)", // Area will be red above the origin
        },
      },
    ],
  });

  return <Line className="chart" data={chartData} options={props.options} />;
};

export default CompletionsChart;

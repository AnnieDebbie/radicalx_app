import { completionData } from "./StatisticsData";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import cloneDeep from "lodash/cloneDeep";

const CompletionsChart = (props) => {
  const sum = completionData.reduce((acc, element, idx) => {
    return acc + element.numberOfCompletions;
  }, 0);
  const optionsExtended = {
    title: {
      display: true,
      text: [sum, "Completion"],
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

  return <Line className="chart" data={chartData} options={options} />;
};

export default CompletionsChart;

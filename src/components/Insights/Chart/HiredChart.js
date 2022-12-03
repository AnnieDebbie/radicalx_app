import { hiredData } from "./StatisticsData";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import cloneDeep from "lodash/cloneDeep";

const HiredChart = (props) => {
  const sum = hiredData.reduce((acc, element, idx) => {
    return acc + element.numberOfHires;
  }, 0);

  const optionsExtended = {
    title: {
      display: true,
      text: [sum, "Qualified Candidates"],
    },
    min: 0,
    max: 150,
  };

  const { title, min, max } = optionsExtended;

  const options = cloneDeep(props.options);

  options.scales.x.title = title;
  options.scales.y.max = max;
  options.scales.y.min = min;

  const [chartData, setChartData] = useState({
    labels: hiredData.map((data) => ""),
    datasets: [
      {
        data: hiredData.map((data) => data.numberOfHires),
        fill: {
          target: "origin",
          above: "rgb(102, 95, 239, 0.2)",
          below: "rgb(0, 0, 0)",
        },
      },
    ],
  });

  return (
    <React.Fragment>
      <Line className="chart" data={chartData} options={options} />
    </React.Fragment>
  );
};

export default HiredChart;

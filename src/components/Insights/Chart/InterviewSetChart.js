import { interviewSetData } from "./StatisticsData";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import cloneDeep from 'lodash/cloneDeep';

const InterviewSetChart = (props) => {
  const sum = interviewSetData.reduce((acc, element, idx) => {
    return acc + element.interviewSet;
  }, 0);

  const optionsExtended = {
    title: {
      display: true,
      text: [sum, "Interview Set"],
    },
    min: 0,
    max: 1750,
  };

  const { title, min, max } = optionsExtended;

  const options = cloneDeep(props.options);

  options.scales.x.title = title;
  options.scales.y.max = max;
  options.scales.y.min = min;

  const [chartData, setChartData] = useState({
    labels: interviewSetData.map((data) => ""),
    datasets: [
      {
        data: interviewSetData.map((data) => data.interviewSet),
        fill: {
          target: "origin",
          above: "rgb(102, 95, 239, 0.2)",
          below: "rgb(0, 0, 0)",
        },
      },
    ],
  });

  return <Line className="chart" data={chartData} options={options} />;
};

export default InterviewSetChart;

import { qualifiedCandidatesData } from "./StatisticsData";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import cloneDeep from "lodash/cloneDeep";

const QualifiedCandidatesChart = (props) => {
  const sum = qualifiedCandidatesData.reduce((acc, element, idx) => {
    return acc + element.qualifiedCandidates;
  }, 0);

  const optionsExtended = {
    title: {
      display: true,
      text: [sum, "Qualified Candidates"],
    },
    min: 0,
    max: 2100,
  };


  const { title, min, max } = optionsExtended;

  const options = cloneDeep(props.options);

  options.scales.x.title = title;
  options.scales.y.max=max;
  options.scales.y.min=min;
  

  const [chartData, setChartData] = useState({
    labels: qualifiedCandidatesData.map((data) => ""),
    datasets: [
      {
        data: qualifiedCandidatesData.map((data) => data.qualifiedCandidates),
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

export default QualifiedCandidatesChart;

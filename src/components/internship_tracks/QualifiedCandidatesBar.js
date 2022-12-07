import { Chart } from "chart.js/auto";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { qualifiedCandidatesBarData } from "./QualifiedCandidatesBarData";
const options = {
  responsive: true,
    maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      min: 0,
      max: 200,
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const QualifiedCandidatesBars = () => {
  const [barData, setBarData] = useState({
    labels: qualifiedCandidatesBarData.map((data) => ""),
    datasets: [
      {
        data: qualifiedCandidatesBarData.map((data) => data.numQualified),
        backgroundColor: "#C4C4C4",
        hoverBackgroundColor: "#793EF5",
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  });

  return (
    <div className="bar-container">
      <Bar data={barData} options={options} />
    </div>
  );
};

export default QualifiedCandidatesBars;

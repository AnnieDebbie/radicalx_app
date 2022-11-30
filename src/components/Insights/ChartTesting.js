import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import "./Chart.css";

const dummy_data = [
  {
    id: "e1",
    numberOfEnrollments: 1200,
    date: new Date(2022, 2, 1),
  },

  { id: "e2", numberOfEnrollments: 1940, date: new Date(2022, 2, 2) },

  {
    id: "e4",
    numberOfEnrollments: 450,
    date: new Date(2022, 2, 3),
  },
  { id: "e5", numberOfEnrollments: 300, date: new Date(2022, 2, 5) },
  {
    id: "e3",
    numberOfEnrollments: 294,
    date: new Date(2022, 2, 6),
  },
  { id: "e6", numberOfEnrollments: 150, date: new Date(2022, 2, 7) },
];

const options = {
  // responsive: true,
  // maintainAspectRatio: false,
  tension: 0.4,
  showLine: false,
  pointRadius: 0,
  scales: {
    x: {
      display:false

      // grid: {
      //   drawOnChartArea: false,
      // },
    },
    y: {
      display:false
      // grid: {
      //   drawOnChartArea: false,
      // },
      // ticks: {
      //   display: false,
      // },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

function LineChart() {
  const [chartData, setChartData] = useState({
    // labels: ["", "", "", "", ""],
    labels: dummy_data.map((data) => ""),
    datasets: [
      {
        data: dummy_data.map((data) => data.numberOfEnrollments),
        // pointBackgroundColor: "#f8dfff",
        fill: {
          target: "origin",
          above: "rgb(102, 95, 239, 0.2)", // And blue below the origin
          below: "rgb(0, 0, 0)", // Area will be red above the origin
        },
      },
    ],
  });
  return (
    <section className="chart-section">
      <div className="chart-container">
        <Line
          className="total-enrollments"
          data={chartData}
          options={options}
        />
        <Line data={chartData} options={options} />
        <Line data={chartData} options={options} />
        <Line data={chartData} options={options} />
        <Line data={chartData} options={options} />
      </div>
    </section>
  );
}

export default LineChart;

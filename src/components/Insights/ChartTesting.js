import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import "./Chart.css";
import { totalEnrollmentsData } from "./StatisticsData";
import TotalEnrollmentsChart from "./TotalEnrollmentsChart";
import CompletionsChart from "./CompletionsChart";
import ReachedOutChart from "./ReachedOutChart";
const options = {
  // responsive: true,
  // maintainAspectRatio: false,
  tension: 0.4,
  showLine: false,
  pointRadius: 0,
  scales: {
    x: {
      display:false
    },
    y: {
      display:false,
      min:0,
      max:2000,
 
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

function LineChart() {
  
  return (
    <section className="chart-section">
      <div className="chart-container">
        <TotalEnrollmentsChart options={options}/>
        <CompletionsChart options={options}/>
        <ReachedOutChart options={options}/>

        {/* <Line
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

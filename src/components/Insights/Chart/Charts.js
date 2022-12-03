import { useState } from "react";
import { Chart } from "chart.js/auto";
import "./Chart.css";
import TotalEnrollmentsChart from "./TotalEnrollmentsChart";
import CompletionsChart from "./CompletionsChart";
import ReachedOutChart from "./ReachedOutChart";
import InterviewSetChart from "./InterviewSetChart";
import HiredChart from "./HiredChart";
import QualifiedCandidatesChart from "./QualifiedCandidatesChart";
const options = {
  responsive: true,
  maintainAspectRatio: false,
  tension: 0.4,
  showLine: false,
  pointRadius: 0,
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
      display: false,
    
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const AllCharts = () => {
  return (
    <section className="chart-container">
      <TotalEnrollmentsChart options={options} />
      <CompletionsChart options={options} />
      <QualifiedCandidatesChart options={options}/>
      <ReachedOutChart options={options} />
      <InterviewSetChart options={options} />
      <HiredChart options={options} />
    </section>
  );
};

export default AllCharts;

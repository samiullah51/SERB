import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./Awards";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Total", "Available", "Sold", "Pending"],
  datasets: [
    {
      label: "Product",
      data: [18, 11, 7, 3],
      backgroundColor: ["#3A6562", "#20365A", "#7A39A2", "#C23FBE"],
      borderWidth: 1,
    },
  ],
};
//
function AwardStats() {
  return (
    <div className="saleStats">
      <h1>Awards</h1>
      <div className="chart">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default AwardStats;

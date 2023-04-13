import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./Sales.css";
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
function SaleStats() {
  return (
    <div className="saleStats">
      <h1>Sales</h1>
      <div className="chart">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default SaleStats;

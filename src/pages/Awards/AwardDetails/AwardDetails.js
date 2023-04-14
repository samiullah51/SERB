import React from "react";
import "./AwardDetails.css";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
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
function AwardDetails() {
  return (
    <>
      <Navbar />
      <div className="award__details">
        <Sidebar />
        <div className="award__contents">
          <div className="contents">
            <h2>Level 1 Completed</h2>
            <p>
              Dear Sami, you have successfully sold 20 products. Your current
              rating is 4.5, and your total selling amount is 200,000. It means
              you deserve 3% amount of your total selling amount as award by
              SERB.
            </p>
          </div>
          <div className="chart">
            <Pie data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AwardDetails;

import React from "react";
import "./Sales.css";

import {
  LineChart,
  YAxis,
  Tooltip,
  XAxis,
  Line,
  CartesianGrid,
} from "recharts";
const data = [
  { name: "Jan", uv: 1200 },
  { name: "Feb", uv: 800 },
  { name: "March", uv: 120 },
  { name: "Apr", uv: 1430 },
  { name: "May", uv: 130 },
  { name: "June", uv: 2000 },
];
function ProfitStats() {
  return (
    <div className="saleStats">
      <h1>Revenue</h1>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
      {/* Total */}
      <div className="total__revenue">
        <h1>Currently, You Have Total Amount Of</h1>
        <h1 style={{ fontSize: "60px" }}>
          150,000<span style={{ fontSize: "20px" }}>(PKR)</span>
        </h1>
        {/* WidtDraw */}
        <button>WithDraw Now</button>
      </div>
    </div>
  );
}

export default ProfitStats;

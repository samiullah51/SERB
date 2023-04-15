import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Views.css";
const data = [
  { name: "Jan", vw: 13 },
  { name: "Feb", vw: 160 },
  { name: "Mar", vw: 18 },
  { name: "Apr", vw: 400 },
];
function ProfileStats() {
  return (
    <div style={{ width: "80%", height: 400 }} className="saleStats">
      <h1>Total Product Views 1,100</h1>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="vw" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProfileStats;

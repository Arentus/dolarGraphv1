import React from "react";
import { LineChart, Line } from "recharts";
const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="pink" />
      </LineChart>
    </div>
  );
};

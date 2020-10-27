import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Row, Col } from "antd";

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomData = () => {
  let today = randomDate(new Date(2018, 0, 1), new Date());
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(monthNames[today.getMonth()]); //January is 0!
  var yyyy = today.getFullYear();

  return {
    name: `${dd} ${mm}. ${yyyy}`,
    price: Number(randomInteger(400000, 500000)),
  };
};

let i;

let mrChart: any = {
  name: "Cotizaciones",
  dataKey: "price",
  data: [],
};

for (i = 0; i < 30; i++) {
  mrChart.data.push(generateRandomData());
}

export const Home = () => {
  return (
    <div className="headerHero">
      <Row>
        <Col>
          <h1>Bienvenido a Dolar Graph</h1>

          <h4>Precio del Dolar:</h4>
          <h1>454.800Bs. S</h1>
        </Col>
      </Row>
      <div>
        <Row>
          <Col>
            <AreaChart
              width={600}
              height={300}
              data={mrChart.data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#11998e" stopOpacity={0.66} />
                  <stop offset="100%" stopColor="#38ef7d" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                domain={[200000, 600000]}
                axisLine={false}
                tickLine={false}
              />
              <CartesianGrid strokeDasharray="" stroke="#eee" />
              <Tooltip
                offset={20}
                cursor={{ stroke: "#11998e", strokeWidth: 1 }}
              />
              <Area
                type="linear"
                dataKey={mrChart.dataKey}
                stroke="#00b09b"
                fillOpacity={1}
                fill="url(#colorUv)"
                strokeWidth={2}
                activeDot={{ stroke: "white", strokeWidth: 2.5, r: 4 }}
              />
            </AreaChart>
          </Col>
        </Row>
      </div>
    </div>
  );
};

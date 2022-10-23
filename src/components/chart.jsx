import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Chart = ({ d, labels }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: d?.d1?.title,
        data: d?.d1?.data,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: d?.d2?.title,
        data: d?.d2?.data,
        fill: false,
        borderColor: "#742774",
      },
      {
        label: d?.d3?.title,
        data: d?.d3?.data,
        fill: false,
        backgroundColor: "rgba(23,152,192,0.2)",
        borderColor: "rgba(23,152,192,1)",
      },
    ],
  };

  return (
    <div className="w-[98%] mt-5 bg-gray-100 h-[100%]">
      <div
        style={{
          height: "100%",
          position: "relative",
          padding: "0 2% 2%",
        }}
      >
        <Line data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default Chart;

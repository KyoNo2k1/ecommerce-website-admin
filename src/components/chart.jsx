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
const Chart = ({ d }) => {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: d?.d1?.title != null ? d.d1.title : "data1",
        data: d?.d1?.data != null ? d.d1.data : [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: d?.d2?.title != null ? d.d2.title : "data2",
        data: d?.d2?.data != null ? d.d2.data : [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
      },
    ],
  };

  return (
    <div className="w-[98%] mt-5 bg-gray-100">
      <div
        style={{
          height: "40vh",
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

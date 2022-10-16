import React from "react";
import Analytics from "../components/analytics";
import Chart from "../components/chart";
import TopProduct from "../components/topProduct";
import ChartUser from "../components/chartUser";

const Dashboard = () => {
  const chartData = {
    d1: {
      title: "Sold Product Amount",
      data: [33, 53, 85, 41, 44, 65],
    },
    d2: {
      title: "Sold Earning",
      data: [33, 25, 35, 51, 54, 76],
    },
  };

  const chartSmallData = {
    d1: {
      title: "Pending Orders Amount",
      data: [33, 53, 85, 41, 44, 65],
    },
    d2: {
      title: "Sold Orders Amount",
      data: [33, 25, 35, 51, 54, 76],
    },
  };

  return (
    <div className="flex px-24 my-4 justify-between">
      <div className="w-[58%]">
        {/*Chart something */}
        <Chart d={chartData} />
        <TopProduct />
      </div>
      <div className="w-[38%]">
        <Analytics />
        {/* Some thing dont know*/}
        <ChartUser d={chartSmallData} />
      </div>
    </div>
  );
};

export default Dashboard;

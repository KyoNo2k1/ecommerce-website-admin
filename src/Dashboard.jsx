import React from "react";
import Analytics from "./pages/analytics";
import Chart from "./pages/chart";
import TopProduct from "./pages/topProduct";

const Dashboard = () => {
  return (
    <div className="flex px-24 my-4 justify-between">
      <div className="w-[58%]">
        <Chart />
        <TopProduct />
      </div>
      <div className="w-[39%]">
        <Analytics />
      </div>
    </div>
  );
};

export default Dashboard;

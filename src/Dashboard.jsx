import React from "react";
import Analytics from "./pages/analytics";
import Chart from "./pages/chart";
import TopProduct from "./pages/topProduct";
import ChartUser from "./pages/chartUser";

const Dashboard = () => {
  return (
    <div className="flex px-24 my-4 justify-between">
      <div className="w-[58%]">
        {/*Chart something */}
        <Chart />
        <TopProduct />
      </div>
      <div className="w-[38%]">
        <Analytics />
        {/* Some thing dont know*/}
        <ChartUser />
      </div>
    </div>
  );
};

export default Dashboard;

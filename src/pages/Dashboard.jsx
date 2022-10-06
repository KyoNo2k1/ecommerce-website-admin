import React from "react";
import Analytics from "../components/analytics";
import Chart from "../components/chart";
import TopProduct from "../components/topProduct";
import ChartUser from "../components/chartUser";

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

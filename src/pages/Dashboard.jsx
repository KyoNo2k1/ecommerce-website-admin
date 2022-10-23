import React, { useState } from "react";
import Analytics from "../components/analytics";
import Chart from "../components/chart";
import TopProduct from "../components/topProduct";
import ChartUser from "../components/chartUser";
import { useSelector } from "react-redux";
import {
  arrCountTranByDate,
  arrCusCreateByDate,
  arrTotalTranByDate,
} from "./../services/analytic/tranAnalytic";
import { arrCountTranByMonth } from "./../services/analytic/tranAnalytic";
import { arrTotalTranByMonth } from "./../services/analytic/tranAnalytic";
import { arrCusCreateByMonth } from "./../services/analytic/tranAnalytic";

import {
  arrCountTranByHour,
  arrCusCreateByHour,
  arrTotalTranByHour,
} from "./../services/analytic/tranAnalytic";

const Dashboard = () => {
  const { arrTransactions } = useSelector((store) => store.transactions);
  const { arrUsers } = useSelector((store) => store.users);
  const [typeFilter] = useState("Daily");
  const today = new Date().getDate();
  const hour = new Date().getHours();
  const month = new Date().getMonth() + 1;

  const dataDaily = {
    d1: {
      title: "Count Transaction By Date",
      data: arrCountTranByDate({ arrTransactions, date: today }),
    },
    d2: {
      title: "Total Transaction By Date",
      data: arrTotalTranByDate({ arrTransactions, date: today }),
    },
    d3: {
      title: "Total User Create By Date",
      data: arrCusCreateByDate({ arrUsers, date: today }),
    },
  };

  const dataHourly = {
    d1: {
      title: "Count Transaction By Hour",
      data: arrCountTranByHour({ arrTransactions, hour: hour }),
    },
    d2: {
      title: "Total Transaction By Hour",
      data: arrTotalTranByHour({ arrTransactions, hour: hour }),
    },
    d3: {
      title: "Total User Create By Hour",
      data: arrCusCreateByHour({ arrUsers, hour: hour }),
    },
  };

  const dataMonthly = {
    d1: {
      title: "Count Transaction By Month",
      data: arrCountTranByMonth({ arrTransactions, month: month }),
    },
    d2: {
      title: "Total Transaction By Month",
      data: arrTotalTranByMonth({ arrTransactions, month: month }),
    },
    d3: {
      title: "Total User Create By Month",
      data: arrCusCreateByMonth({ arrUsers, month: month }),
    },
  };

  //fake api

  // TODO
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
        <div className="h-[300px]">
          <Chart
            d={typeFilter === "Daily" ? dataHourly : dataDaily}
            labels={
              typeFilter === "Daily"
                ? Array.from({ length: today }, (_, i) => i + 1)
                : Array.from({ length: 12 }, (_, i) => i + 1)
            }
          />
        </div>
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

import React from "react";

import {
  faCircleDollarToSlot,
  faSackDollar,
  faListCheck,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import AnalyticItem from "./analyticItem";
import { useSelector } from "react-redux";
import {
  amountTranByDate,
  totalAllTran,
  totalTranByDate,
} from "../services/analytic/tranAnalytic";
import { pendingOrdersTran } from "./../services/analytic/tranAnalytic";

const Analytics = () => {
  const { arrTransactions } = useSelector((store) => store.transactions);
  const today = new Date().getDate();
  var totalEarnings = totalAllTran({ arrTransactions });
  var pendingOrders = pendingOrdersTran({ arrTransactions });

  const analytics = [
    {
      id: 1,
      title: "Amount Sales Today",
      count: amountTranByDate({ arrTransactions, date: today }),
      percent: 0.05,
      icon: faCircleDollarToSlot,
    },
    {
      id: 2,
      title: "Total sales today",
      count:
        Math.round(totalTranByDate({ arrTransactions, date: today }) * 100) /
        100,
      percent: 0.05,
      icon: faCoins,
    },
    {
      id: 3,
      title: "Total Earning",
      count: Math.round(totalEarnings * 100) / 100,
      percent: 0.05,
      icon: faSackDollar,
    },
    {
      id: 4,
      title: "Pending Orders",
      count: pendingOrders,
      percent: 0.05,
      icon: faListCheck,
    },
  ];

  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col gap-4 h-[240px] ">
        {analytics.map((item) => {
          return <AnalyticItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Analytics;

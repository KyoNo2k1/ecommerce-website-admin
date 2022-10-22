import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faSackDollar,
  faListCheck,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import AnalyticItem from "./analyticItem";
import { useSelector } from "react-redux";

const Analytics = () => {
  const { arrTransactions } = useSelector((store) => store.transactions);
  var totalEarnings = 0;
  var pendingOrders = 0;
  console.log(arrTransactions);
  if (arrTransactions.length) {
    arrTransactions.forEach((transactions) => {
      totalEarnings += Number(transactions.total);
      if (transactions.status === "Waiting") pendingOrders += 1;
    });
  }

  const analytics = [
    {
      id: 1,
      title: "Sales Today",
      count: 1,
      percent: 0.05,
      icon: faCircleDollarToSlot,
    },
    {
      id: 2,
      title: "Last month",
      count: 1,
      percent: 0.05,
      icon: faCoins,
    },
    {
      id: 3,
      title: "Total Earning",
      count: totalEarnings,
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

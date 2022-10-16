import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faSackDollar,
  faDollarSign,
  faListCheck,
  faCoins,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";
import AnalyticItem from "./analyticItem";

const Analytics = () => {
  const analytics = [
    {
      title: "Sales Today",
      count: 30,
      percent: 0.05,
      icon: faCircleDollarToSlot,
    },
    {
      title: "Last month Sales",
      count: 2.502,
      percent: 0.05,
      icon: faCoins,
    },
    {
      title: "Total Earning",
      count: 2.056,
      percent: 0.05,
      icon: faSackDollar,
    },
    {
      title: "Pending Orders",
      count: 20,
      percent: 0.05,
      icon: faListCheck,
    },
  ];

  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col gap-4 h-[240px] ">
        {analytics.map((item) => {
          return <AnalyticItem item={item} />;
        })}
      </div>
    </div>
  );
};

export default Analytics;

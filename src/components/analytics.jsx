import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faSackDollar,
  faListCheck,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import AnalyticItem from "./analyticItem";

const Analytics = () => {
  const checkouts = [
    {
      address: "Ho chi minh, Viet Nam",
      checkoutId: 201,
      customer: "abcd@gm.uit.edu.vn",
      price: 20,
      status: "Waiting",
      checkoutTime: "2022/10/16",
    },
    {
      address: "Ho chi minh, Viet Nam",
      checkoutId: 203,
      customer: "abcd@gm.uit.edu.vn",
      price: 40,
      status: "Waiting",
      checkoutTime: "2022/10/02",
    },
    {
      address: "Ho chi minh, Viet Nam",
      checkoutId: 203,
      customer: "abcd@gm.uit.edu.vn",
      price: 10,
      status: "Delivering",
      checkoutTime: "2022/09/02",
    },
  ];

  const calQuantityOfPendingCheckout = () => {
    var result = 0;

    checkouts.forEach((element) => {
      if (element.status == "Waiting") result++;
    });

    return result;
  };

  const calTotalEarning = () => {
    var result = 0;

    checkouts.forEach((element) => {
      const date = new Date(element.checkoutTime);
      if (
        date.getMonth() === today.getMonth() &&
        date.getYear() === today.getYear()
      )
        result += element.price;
    });

    return result;
  };

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const calSalesToday = () => {
    var result = 0;

    checkouts.forEach((element) => {
      const date = new Date(element.checkoutTime);
      if (date.getDate() === today.getDate()) result += element.price;
    });

    return result;
  };

  const calTotalEarningInLastMonth = () => {
    var result = 0;

    checkouts.forEach((element) => {
      const date = new Date(element.checkoutTime);
      if (
        date.getMonth() === today.getMonth() - 1 &&
        date.getYear() === today.getYear()
      )
        result += element.price;
    });

    return result;
  };

  const analytics = [
    {
      id: 1,
      title: "Sales Today",
      count: calSalesToday(),
      percent: 0.05,
      icon: faCircleDollarToSlot,
    },
    {
      id: 2,
      title: "Last month",
      count: calTotalEarningInLastMonth(),
      percent: 0.05,
      icon: faCoins,
    },
    {
      id: 3,
      title: "Total Earning",
      count: calTotalEarning(),
      percent: 0.05,
      icon: faSackDollar,
    },
    {
      id: 4,
      title: "Pending Orders",
      count: calQuantityOfPendingCheckout(),
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

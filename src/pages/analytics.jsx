import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";
const Analytics = () => {
  const analytics = [
    {
      title: "Sales Today",
      count: 2.056,
      percent: 0.05,
    },
    {
      title: "Visitors Today",
      count: 2.056,
      percent: 0.05,
    },
    {
      title: "Total Earning",
      count: 2.056,
      percent: 0.05,
    },
    {
      title: "Pending Orders",
      count: 2.056,
      percent: 0.05,
    },
  ];

  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col gap-4 h-[270px] ">
        {analytics.map((item) => {
          return (
            <div
              className=" p-3 flex justify-between shadow-xl"
              key={item.title}
            >
              {/*Title items analytics*/}
              <div>
                <p className="text-[15px]">{item.title}</p>
                <p className="text-primary text-[24px]">{item.count}</p>
              </div>
              <div>
                {/*Icon analytics*/}
                <div className="bg-primary rounded w-[80%] h-[45%] overflow-hidden flex justify-center align-middle cursor-pointer">
                  <FontAwesomeIcon
                    icon={faSackDollar}
                    className="block my-auto"
                    inverse
                    fade
                  />
                </div>
                <div className="flex mt-6 align-middle">
                  <p className="text-[12px] text-green-500">{item.percent}%</p>
                  <div className="text-green-500 rounded w-[20px] h-[20px] overflow-hidden flex justify-center align-middle cursor-pointer ml-3">
                    <FontAwesomeIcon
                      icon={faArrowUpRightDots}
                      className="block my-auto"
                      beatFade
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Analytics;

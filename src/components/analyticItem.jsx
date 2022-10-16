import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";

const AnalyticItem = ({ item }) => {
  console.log(item);
  return (
    <div className=" p-3 flex justify-between shadow-xl" key={item.title}>
      {/*Title items analytics*/}
      <div>
        <p className="text-[15px]">{item.title}</p>
        <p className="text-primary text-[24px]">{item.count}</p>
      </div>
      <div className="flex flex-col items-end justify-between">
        {/*Icon analytics*/}
        <div className="bg-primary rounded w-[65%] h-[40%] overflow-hidden flex justify-center align-middle">
          <FontAwesomeIcon
            icon={item.icon}
            className="block my-auto"
            inverse
            fade
          />
        </div>
        <div className="flex align-middle">
          <p className="text-[12px] text-green-500">{item.percent}%</p>
          <div className="text-green-500 rounded w-[20px] h-[20px] overflow-hidden flex justify-center align-middle ml-3">
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
};

export default AnalyticItem;

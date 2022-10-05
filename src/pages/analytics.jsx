import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";
const Analytics = () => {
  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col gap-4 h-[270px]">
        <div className="p-3">
          <div>
            <p>Sales Today</p>
            <p>2.056</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faSackDollar} />
            <div>
              <p>0.05%</p>
              <FontAwesomeIcon icon={faArrowUpRightDots} size="xs" />
            </div>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
};

export default Analytics;

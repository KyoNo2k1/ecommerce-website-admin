//

import React from "react";
import Chart from "../components/chart";
import ReportAnalyticItem from "../components/reportAnalyticItem";
import ReportProduct from "../components/reportProduct";

//img
import BtnMedium from "../images/Button-Medium.png";
const Report = () => {
  return (
    <div className="w-[100%] bg-[#F9F9F9]">
      <div className="w-[90%] ml-[5%] mt-[0%]">
        <div className="grid grid-cols-2 gap-4 gap-x-[20px] bg-[#F9F9F9]">
          <div>
            {/* Filter */}
            <div className="grid grid-cols-3 gap-3 p-[20px]">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  By
                </label>
                <select
                  id="countries"
                  className="w-[149px] h-[56px] pl-[20px]"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT">Monthly</option>
                  <option value="DAILY">Daily</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  From
                </label>
                <input type="date" className=" w-[169px] h-[56px] p-[20px]" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  To
                </label>
                <input type="date" className=" w-[169px] h-[56px] p-[20px]" />
              </div>
              <div></div>
              <div></div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Type
                </label>
                <select
                  id="countries"
                  className=" w-[100%] h-[56px] pl-[20px]"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Profit By Category
                  </option>
                  <option value="US">Plant pots</option>
                  <option value="CA">Ceramics</option>
                  <option value="FR">Tables</option>
                  <option value="DE">Chairs</option>
                  <option value="DE">Crockery</option>
                  <option value="DE">Tableware</option>
                  <option value="DE">Cutlery</option>
                </select>
              </div>
            </div>
          </div>
          {/* Analytics */}
          <div className="p-[20px] pl-[0px] ml-[8%]">
            <div className="grid">
              <div className="grid grid-cols-3 gap-3">
                <ReportAnalyticItem title="Total Orders" value="256" />
                <ReportAnalyticItem title="Profit" value="1000" />
                <ReportAnalyticItem
                  title="New Customers"
                  value="20"
                  icon="user"
                />
                <ReportAnalyticItem
                  title="Canceled Orders"
                  value="2"
                  type="secondary"
                />
                <ReportAnalyticItem
                  title="Total Products"
                  value="200"
                  type="secondary"
                />
                <ReportAnalyticItem
                  title="Total Customers"
                  value="20"
                  type="secondary"
                  icon="user"
                />
              </div>
              {/* <div className="grid grid-cols-4 mt-4">
                <div
                  className="p-[20px] w-[169px] h-[87px] pt-5"
                  style={box_shadow}
                >
                  <p className="text-h6">Visited Page</p>
                  <label className="text-[#4E4D93] text-h3" htmlFor="">
                    2.056
                    <img
                      src={BtnMedium}
                      alt=""
                      className="float-right mr-[-7px] mt-[-7px]"
                    />
                  </label>
                </div>
                <div
                  className="p-[20px] w-[169px] h-[87px] pt-5 ml-[20%]"
                  style={box_shadow}
                >
                  <p className="text-h6">Visited Page</p>
                  <label className="text-[#4E4D93] text-h3" htmlFor="">
                    2.056
                    <img
                      src={BtnMedium}
                      className="float-right mr-[-7px] mt-[-7px]"
                      alt=""
                    />
                  </label>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-14">
        <Chart />
      </div>

      <div className="ml-[8%]">
        {/* table  */}
        <ReportProduct></ReportProduct>
      </div>
    </div>
  );
};

export default Report;

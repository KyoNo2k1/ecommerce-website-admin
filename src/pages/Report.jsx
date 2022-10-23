//

import React, { useState } from "react";
import Chart from "../components/chart";
import ReportAnalyticItem from "../components/reportAnalyticItem";
import ReportProduct from "../components/reportProduct";
import {
  arrCountTranByDate,
  arrCountTranByMonth,
  arrCusCreateByDate,
  arrTotalTranByDate,
  countUserToday,
  totalAllTran,
  totalProductCount,
} from "./../services/analytic/tranAnalytic";
import { useSelector } from "react-redux";
import { canceledOrdersTran } from "./../services/analytic/tranAnalytic";
import { useNavigate } from "react-router-dom";
import { arrTotalTranByMonth } from "./../services/analytic/tranAnalytic";
import { arrCusCreateByMonth } from "./../services/analytic/tranAnalytic";

const Report = () => {
  const navigate = useNavigate();
  const { arrTransactions } = useSelector((store) => store.transactions);
  const { arrUsers } = useSelector((store) => store.users);
  const today = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const [typeFilter, setTypeFilter] = useState("Daily");
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
                  defaultValue={"Daily"}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <option value="Daily">Daily</option>
                  <option value="Monthly">Monthly</option>
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
                <ReportAnalyticItem
                  title="Total Orders"
                  value={arrTransactions.length}
                  onClick={() => navigate("/Transactions")}
                />
                <ReportAnalyticItem
                  title="Total sales"
                  value={
                    Math.round(totalAllTran({ arrTransactions }) * 100) / 100
                  }
                  onClick={() => navigate("/Transactions")}
                />
                <ReportAnalyticItem
                  title="Total Customers"
                  value={arrUsers.length}
                  icon="user"
                  onClick={() => navigate("/Customer")}
                />
                <ReportAnalyticItem
                  title="Canceled Orders"
                  value={canceledOrdersTran({ arrTransactions })}
                  type="secondary"
                  onClick={() => navigate("/Transactions")}
                />
                <ReportAnalyticItem
                  title="Total Products"
                  value={totalProductCount({ arrTransactions })}
                  type="secondary"
                  onClick={() => navigate("/Product")}
                />
                <ReportAnalyticItem
                  title="New Customer Today"
                  value={countUserToday({ arrUsers, date: today })}
                  type="secondary"
                  icon="user"
                  onClick={() => navigate("/Customer")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-14 h-[500px]">
        <Chart
          d={typeFilter === "Daily" ? dataDaily : dataMonthly}
          labels={
            typeFilter === "Daily"
              ? Array.from({ length: today }, (_, i) => i + 1)
              : Array.from({ length: 12 }, (_, i) => i + 1)
          }
        />
      </div>

      <div className="ml-[8%]">
        {/* table  */}
        <ReportProduct />
      </div>
    </div>
  );
};

export default Report;

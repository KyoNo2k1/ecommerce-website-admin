//

import React, { useState } from "react";
import Chart from "../components/chart";
import ReportAnalyticItem from "../components/reportAnalyticItem";
import ReportProduct from "../components/reportProduct";
import {
  arrCountTranByDate,
  arrCountTranByMonth,
  arrTotalTranByDate,
  totalAllTran,
  totalProductCount,
  arrTotalTranByMonth,
  canceledOrdersTran,
  arrLabelFromTo,
} from "./../services/analytic/tranAnalytic";
import {
  countUserToday,
  arrCusCreateByDate,
  arrCusCreateByMonth,
  arrCusByDateTimeline,
} from "../services/analytic/userAnalytic";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { arrCountTranByDateTimeline } from "./../services/analytic/tranAnalytic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import { TRANSACTIONS, USERS } from "../services/constant/firestore";
import { db } from "../services/firebase.config";
import { updateRealtimeTransaction } from "../redux/transactionSlice/transactionSlice";
import { updateRealtimeUser } from "../redux/userSlice/userSlice";
import { arrSaleTranByDateTimeline } from "./../services/analytic/tranAnalytic";

const Report = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { arrTransactions } = useSelector((store) => store.transactions);
  const { arrUsers } = useSelector((store) => store.users);
  const today = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const date = new Date();
  const [typeFilter, setTypeFilter] = useState("Daily");

  // onchange date
  const [arrLabelDate, setArrLabelDate] = useState([]);

  const [arrChartCountDate, setArrChartCountDate] = useState([]);
  const [arrChartSalesDate, setArrChartSalesDate] = useState([]);
  const [arrChartCusDate, setArrChartCusDate] = useState([]);

  //onSnapshotChange
  useEffect(() => {
    const updateRealtimeTrans = onSnapshot(
      collection(db, TRANSACTIONS),
      async (snap) => {
        const arrNew = [];
        await snap.forEach((data) => arrNew.push(data.data()));
        await dispatch(updateRealtimeTransaction(arrNew));
      }
    );
    return updateRealtimeTrans;
  }, []);
  useEffect(() => {
    const updateUsers = onSnapshot(collection(db, USERS), async (snap) => {
      const arrNew = [];
      await snap.forEach((data) => arrNew.push(data.data()));
      await dispatch(updateRealtimeUser(arrNew));
    });
    return updateUsers;
  }, []);

  const dataDaily = {
    d1: {
      title: "Count Transaction By Date",
      data: arrChartCountDate.length
        ? arrChartCountDate
        : arrCountTranByDate({ arrTransactions, date: [year, month, today] }),
    },
    d2: {
      title: "Total Transaction By Date",
      data: arrChartSalesDate.length
        ? arrChartSalesDate
        : arrTotalTranByDate({ arrTransactions, date: [year, month, today] }),
    },
    d3: {
      title: "Total User Create By Date",
      data: arrChartCusDate.length
        ? arrChartCusDate
        : arrCusCreateByDate({ arrUsers, date: [year, month, today] }),
    },
  };
  const labelDaily = () => {
    if (typeFilter === "Daily")
      return Array.from({ length: today }, (_, i) => i + 1);
    else return Array.from({ length: 12 }, (_, i) => i + 1);
  };

  const dataMonthly = {
    d1: {
      title: "Count Transaction By Month",
      data: arrCountTranByMonth({ arrTransactions, month: [year, month] }),
    },
    d2: {
      title: "Total Transaction By Month",
      data: arrTotalTranByMonth({ arrTransactions, month: [year, month] }),
    },
    d3: {
      title: "Total User Create By Month",
      data: arrCusCreateByMonth({ arrUsers, month: [year, month] }),
    },
  };

  //handleChangeFrom
  const handleChangeFrom = (e) => {
    if (month < Number(e.target.value.split("-")[1]))
      return alert("Choose a month lower than now");
    else if (month === Number(e.target.value.split("-")[1])) {
      if (today < Number(e.target.value.split("-")[2]))
        return alert("Choose a day lower than now");
    }
    setArrLabelDate(
      arrLabelFromTo({ from: new Date(e.target.value), to: date })
    );
    setArrChartCountDate(
      arrCountTranByDateTimeline({
        arrTransactions,
        from: new Date(e.target.value),
        to: date,
      })
    );
    setArrChartSalesDate(
      arrSaleTranByDateTimeline({
        arrTransactions,
        from: new Date(e.target.value),
        to: date,
      })
    );
    setArrChartCusDate(
      arrCusByDateTimeline({
        arrUsers,
        from: new Date(e.target.value),
        to: date,
      })
    );
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
                <input
                  type="date"
                  className=" w-[169px] h-[56px] p-[20px]"
                  onChange={(e) => handleChangeFrom(e)}
                />
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
          labels={arrLabelDate.length ? arrLabelDate : labelDaily()}
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

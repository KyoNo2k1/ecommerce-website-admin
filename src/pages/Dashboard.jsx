import React, { useEffect } from "react";
import Analytics from "../components/analytics";
import Chart from "../components/chart";
import TopProduct from "../components/topProduct";
import ChartUser from "../components/chartUser";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "./../redux/transactionSlice/transactionSlice";
import {
  arrCountTranByDate,
  totalTranByDate,
} from "./../services/analytic/tranAnalytic";
import { getUsers } from "../redux/userSlice/userSlice";

const Dashboard = () => {
  const { arrTransactions } = useSelector((store) => store.transactions);
  const { arrUsers } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
    dispatch(getUsers());
  }, []);
  console.log(arrTransactions);
  console.log(arrUsers);

  //fake api
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
    {
      address: "Ho chi minh, Viet Nam",
      checkoutId: 203,
      customer: "abcd@gm.uit.edu.vn",
      price: 100,
      status: "Delivering",
      checkoutTime: "2022/08/02",
    },
    {
      address: "Ho chi minh, Viet Nam",
      checkoutId: 203,
      customer: "abcd@gm.uit.edu.vn",
      price: 30,
      status: "Delivering",
      checkoutTime: "2022/07/02",
    },
  ];

  // lay date today
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const calSoldProductAmountData = () => {
    // init
    var result = [0, 0, 0, 0, 0, 0];

    // gan null vao thang chua co data
    const temp = 12 - today.getMonth() - 1;
    for (let i = temp; i > 0; i--) {
      result[6 - i] = null;
    }

    // lay data gan vao cac thang da co data
    checkouts.forEach((element) => {
      const date = new Date(element.checkoutTime);
      switch (date.getMonth() + 1) {
        case 7:
          result[0]++;
          break;
        case 8:
          result[1]++;
          break;
        case 9:
          result[2]++;
          break;
        case 10:
          result[3]++;
          break;
        case 11:
          result[4]++;
          break;
        case 12:
          result[5]++;
          break;
        default:
          break;
      }
    });
    return result;
  };

  const calSoldEarningData = () => {
    // init
    var result = [0, 0, 0, 0, 0, 0];

    // gan null vao thang chua co data
    const temp = 12 - today.getMonth() - 1;
    for (let i = temp; i > 0; i--) {
      result[6 - i] = null;
    }

    // lay data gan vao cac thang da co data
    checkouts.forEach((element) => {
      const date = new Date(element.checkoutTime);
      switch (date.getMonth() + 1) {
        case 7:
          result[0] += element.price;
          break;
        case 8:
          result[1] += element.price;
          break;
        case 9:
          result[2] += element.price;
          break;
        case 10:
          result[3] += element.price;
          break;
        case 11:
          result[4] += element.price;
          break;
        case 12:
          result[5] += element.price;
          break;
        default:
          break;
      }
    });
    return result;
  };

  const chartData = {
    d1: {
      title: "Sold Product Amount",
      data: calSoldProductAmountData(),
    },
    d2: {
      title: "Sold Earning",
      data: calSoldEarningData(),
    },
  };

  // TODO
  const chartSmallData = {
    d1: {
      title: "Pending Orders Amount",
      data: [33, 53, 85, 41, 44, 65],
    },
    d2: {
      title: "Sold Orders Amount",
      data: [33, 25, 35, 51, 54, 76],
    },
  };

  return (
    <div className="flex px-24 my-4 justify-between">
      <div className="w-[58%]">
        {/*Chart something */}
        <div className="h-[300px]">
          <Chart d={chartData} />
        </div>
        <TopProduct />
      </div>
      <div className="w-[38%]">
        <Analytics />
        {/* Some thing dont know*/}
        <ChartUser d={chartSmallData} />
      </div>
    </div>
  );
};

export default Dashboard;

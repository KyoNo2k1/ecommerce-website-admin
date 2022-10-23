import React, { useEffect } from "react";
import Analytics from "../components/analytics";
import Chart from "../components/chart";
import TopProduct from "../components/topProduct";
import ChartUser from "../components/chartUser";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransactions,
  updateRealtimeTransaction,
} from "./../redux/transactionSlice/transactionSlice";
import {
  arrCountTranByCate,
  arrCountTranByDate,
  arrCountTranByHour,
  arrSalesTranByCate,
  arrTotalTranByHour,
  totalTranByDate,
} from "./../services/analytic/tranAnalytic";
import { getUsers } from "../redux/userSlice/userSlice";
import { onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase.config";
import { TRANSACTIONS } from "../services/constant/firestore";
import { collection } from "firebase/firestore";
import { arrUserTranByHour } from "../services/analytic/userAnalytic";
import { getCategories } from "../redux/productSlice/productSlice";
import { getProducts } from "./../redux/productSlice/productSlice";
import { getTopSales } from "../services/analytic/productAnalytic";

const Dashboard = () => {
  const { arrTransactions } = useSelector((store) => store.transactions);
  const { arrUsers } = useSelector((store) => store.users);
  const { arrCategories, arrProducts } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
    dispatch(getUsers());
    dispatch(getCategories());
    dispatch(getProducts());

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

  const chartData = {
    d1: {
      title: "Count Order By Hours",
      data: arrCountTranByHour({ arrTransactions }),
    },
    d2: {
      title: "Total Sale Order By Hours",
      data: arrTotalTranByHour({ arrTransactions }),
    },
    d3: {
      title: "Count Users By Hours",
      data: arrUserTranByHour({ arrUsers }),
    },
  };

  // TODO
  const labels = Array.from({ length: 24 }, (_, i) => i + 1);
  const labelsCate = arrCategories.map((cate) => cate.name);
  const chartSmallData = {
    d1: {
      title: "Total Count",
      data: arrCountTranByCate({
        arrProducts: arrProducts,
        arrCate: labelsCate,
      }),
    },
    d2: {
      title: "Total Sales",
      data: arrSalesTranByCate({
        arrProducts: arrProducts,
        arrCate: labelsCate,
      }),
    },
  };

  const dataTopProduct = arrProducts.find(
    (data) =>
      data.uuid === getTopSales({ arrTransactions: arrTransactions }).uuid
  );

  return (
    <div className="flex px-24 my-4 justify-between">
      <div className="w-[58%]">
        {/*Chart something */}
        <div className="h-[300px]">
          <Chart d={chartData} labels={labels} />
        </div>
        <TopProduct
          product={dataTopProduct}
          count={getTopSales({ arrTransactions: arrTransactions }).count}
        />
      </div>
      <div className="w-[38%]">
        <Analytics />
        {/* Some thing dont know*/}
        <div className="h-[252px]">
          <ChartUser d={chartSmallData} labels={labelsCate} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

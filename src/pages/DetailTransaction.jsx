import React, { useEffect } from "react";
import CheckoutListDetail from "../components/checkoutListDetail";
import Button from "../components/button";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneTransaction,
  updateTransaction,
} from "../redux/transactionSlice/transactionSlice";
import { useNavigate, useParams } from "react-router-dom";

const DetailTransaction = () => {
  const dispatch = useDispatch();
  const { Id } = useParams();
  const navigate = useNavigate();
  const { transaction } = useSelector((store) => store.transactions);

  const { statusUpdateTransaction } = useSelector(
    (store) => store.transactions
  );

  useEffect(() => {
    dispatch(getOneTransaction(Id));
  }, []);

  useEffect(() => {
    console.log(statusUpdateTransaction);
    if (statusUpdateTransaction) {
      navigate("/Transactions");
    }
  }, [statusUpdateTransaction]);

  const handleViewDetail = () => {
    navigate(`/Customer/${transaction.userId}`);
  };

  const handleWaiting = () => {
    dispatch(updateTransaction({ id: Id, status: "Delivering" }));
  };

  const handleDelivering = () => {
    dispatch(updateTransaction({ id: Id, status: "Completed" }));
  };

  return (
    <div className="px-24">
      <span className="text-[24px]">#{transaction?.uid}</span>
      <span className="text-[20px] font-bold ml-24">{`Status : ${transaction?.status}`}</span>
      <div className="flex">
        <div className="w-[70%]">
          <div className="border-b-2 border-primary-300">
            <div className="flex py-3 justify-between border-b-2 border-primary-300">
              <p className="w-[45%]">Product</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            {/*Product Cart List*/}
            <CheckoutListDetail transaction={transaction} />
          </div>
          <div className="flex flex-row-reverse my-4">
            <p className="text-[20px] text-primary">
              Subtotal &emsp;{" "}
              <span className="text-[24px]">${`${transaction?.total}`}</span>
            </p>
          </div>
        </div>
        <div className="w-[10%]"></div>
        <div className="w-[20%] relative h-[60vh]">
          <p>Customer Information</p>
          <div className="flex justify-between mt-4">
            <div className="">
              <p>Name</p>
              <p>{transaction?.username}</p>
            </div>
            <div className="">
              <p>Phone</p>
              <p>{transaction?.phone}</p>
            </div>
          </div>
          <div className="mt-3">
            <p>Address</p>
            <p>{transaction?.ship_to?.address}</p>
          </div>

          <br />
          <div onClick={() => handleViewDetail()}>
            <Button Color="primary" width="w-full">
              View Detail
            </Button>
          </div>

          <div className="absolute bottom-0 right-0 flex">
            <div className="" onClick={() => navigate(-1)}>
              <Button Color="secondary" width="w-full">
                Back
              </Button>
            </div>
            <div className="flex-col">
              {transaction?.status === "Waiting" ? (
                <div onClick={() => handleWaiting()}>
                  <Button Color="primary" width="w-full">
                    Confirm
                  </Button>
                </div>
              ) : null}
              {transaction?.status === "Delivering" ? (
                <div onClick={() => handleDelivering()}>
                  <Button Color="primary" width="w-full">
                    Finished
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTransaction;

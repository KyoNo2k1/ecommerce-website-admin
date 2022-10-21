import React, { useEffect } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  resetStatusTransaction,
  updateTransaction,
} from "./../redux/transactionSlice/transactionSlice";

import { timeConvert } from "./../components/convertTime";
import updateStatusTransaction from "./../services/transaction/update";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Transactions = () => {
  const { arrTransactions, statusUpdateTransaction } = useSelector(
    (store) => store.transactions
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (statusUpdateTransaction) {
      toast(`Transactions is ${statusUpdateTransaction}`);
    }
    dispatch(resetStatusTransaction());
  }, [statusUpdateTransaction]);

  const navigate = useNavigate();

  // options with default values
  const options = {
    defaultTabId: "Waiting",
    activeClasses:
      "cursor-pointer outline-none border-b-2 pt-2 pb-1 my-1 pr-2 text-purple-800 hover:text-purple-800 dark:text-purple-800 dark:hover:text-purple-800 hover:border-purple-800 border-purple-800 dark:border-purple-800 transition ease-in-out delay-150 duration-75",
    inactiveClasses:
      "cursor-pointer border-b-2 pt-2 pb-1 my-1 pr-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300 transition ease-in-out delay-100 hover:duration-45",
    onShow: () => {
      console.log("tab is shown");
    },
  };

  //handle get
  const handleGetListByStatus = (data) => {
    const result = arrTransactions.filter((item) => item.status === data);

    return result;
  };

  // handle delete
  const handleDelete = (id) => {
    let text = "You want to set this transactions is Canceled?";
    if (window.confirm(text) === true) {
      try {
        dispatch(updateTransaction({ id: id, status: "Canceled" }));
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(arrTransactions);
  // handle update
  const handleUpdate = (id) => {
    navigate(`/Transactions/${id}`);
  };

  return (
    <Tabs
      className="px-24 my-2 grid grid-cols-12 gap-6"
      selectedTabClassName={options.activeClasses}
    >
      <TabList className="col-span-2 border-none">
        <Tab className={`${options.inactiveClasses}`}>All</Tab>
        <Tab className={`${options.inactiveClasses}`}>Waiting</Tab>
        <Tab className={`${options.inactiveClasses}`}>Delivering</Tab>
        <Tab className={`${options.inactiveClasses}`}>Completed</Tab>
        <Tab className={`${options.inactiveClasses}`}>Canceled</Tab>
      </TabList>
      <div className="col-span-10">
        {/* State: All Transactions */}
        <TabPanel className="">
          <div>
            <table className="">
              <tbody>
                <tr>
                  <th>STT</th>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Checkout Time</th>
                  <th></th>
                </tr>
                {arrTransactions.map((tran, index) => (
                  <tr className="border-b-2" key={tran.uid}>
                    <td>{index}</td>
                    <td>{tran.uid}</td>
                    <td>{tran.contact}</td>
                    <td>{tran.price}</td>
                    <td>{tran.status}</td>
                    <td>{timeConvert(tran.updated_date)}</td>
                    <td className="border-none flex">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleUpdate(tran.uid)}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </div>
                      <div
                        className="ml-3 cursor-pointer"
                        onClick={() => handleDelete(tran.uid)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        {/* State: Waiting */}
        <TabPanel className="">
          <div>
            <table className="">
              <tbody>
                <tr>
                  <th>STT</th>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Checkout Time</th>
                  <th></th>
                </tr>
                {handleGetListByStatus("Waiting")?.map((tran, index) => (
                  <tr className="border-b-2" key={tran.uid}>
                    <td>{index}</td>
                    <td>{tran.uid}</td>
                    <td>{tran.contact}</td>
                    <td>{tran.price}</td>
                    <td>{tran.status}</td>
                    <td>{timeConvert(tran.updated_date)}</td>
                    <td className="border-none flex">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleUpdate(tran.uid)}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </div>
                      <div
                        className="ml-3 cursor-pointer"
                        onClick={() => handleDelete(tran.uid)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        {/* State: Delivering */}
        <TabPanel className="">
          <div>
            <table className="">
              <tbody>
                <tr>
                  <th>STT</th>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Checkout Time</th>
                  <th></th>
                </tr>
                {handleGetListByStatus("Delivering")?.map((tran, index) => (
                  <tr className="border-b-2" key={tran.uid}>
                    <td>{index}</td>
                    <td>{tran.uid}</td>
                    <td>{tran.contact}</td>
                    <td>{tran.price}</td>
                    <td>{tran.status}</td>
                    <td>{timeConvert(tran.updated_date)}</td>
                    <td className="border-none flex">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleUpdate(tran.uid)}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </div>
                      <div
                        className="ml-3 cursor-pointer"
                        onClick={() => handleDelete(tran.uid)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        {/* State: Completed */}
        <TabPanel className="">
          <div>
            <table className="">
              <tbody>
                <tr>
                  <th>STT</th>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Checkout Time</th>
                  <th></th>
                </tr>
                {handleGetListByStatus("Completed")?.map((tran, index) => (
                  <tr className="border-b-2" key={tran.uid}>
                    <td>{index}</td>
                    <td>{tran.uid}</td>
                    <td>{tran.contact}</td>
                    <td>{tran.price}</td>
                    <td>{tran.status}</td>
                    <td>{timeConvert(tran.updated_date)}</td>
                    <td className="border-none flex">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleUpdate(tran.uid)}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </div>
                      <div
                        className="ml-3 cursor-pointer"
                        onClick={() => handleDelete(tran.uid)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        {/* State: Canceled */}
        <TabPanel className="">
          <div>
            <table className="">
              <tbody>
                <tr>
                  <th>STT</th>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Checkout Time</th>
                  <th></th>
                </tr>
                {handleGetListByStatus("Canceled")?.map((tran, index) => (
                  <tr className="border-b-2" key={tran.uid}>
                    <td>{index}</td>
                    <td>{tran.uid}</td>
                    <td>{tran.contact}</td>
                    <td>{tran.price}</td>
                    <td>{tran.status}</td>
                    <td>{timeConvert(tran.updated_date)}</td>
                    <td className="border-none flex">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleUpdate(tran.uid)}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </div>
                      <div
                        className="ml-3 cursor-pointer"
                        onClick={() => handleDelete(tran.uid)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Transactions;

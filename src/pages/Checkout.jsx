import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../components/buttonIcon";

const Checkout = () => {
  const checkouts = [
    {
      id: 1,
      checkoutID: "#012",
      customerEmail: "abcd@gm.uit.edu.vn",
      price: 20.0,
      status: "Waiting",
      checkoutTime: "02-10-2022",
    },
    {
      id: 2,
      checkoutID: "#022",
      customerEmail: "abcd@gm.uit.edu.vn",
      price: 30.0,
      status: "Waiting",
      checkoutTime: "02-10-2022",
    },
    {
      id: 2,
      checkoutID: "#021",
      customerEmail: "abcd@gm.uit.edu.vn",
      price: 50.0,
      status: "Delivering",
      checkoutTime: "02-10-2022",
    },
  ];

  const handleGetListByStatus = () => {
    const result = {
      Waiting: [],
      Delivering: [],
      Completed: [],
      Canceled: [],
    };

    checkouts.forEach((item) => {
      // if (item.status != null) {
      //   arr["Waiting"].push(item);
      // }
      result[item.status].push(item);
    });

    return result;
  };

  // options with default values
  const options = {
    defaultTabId: "Waiting",
    activeClasses:
      "outline-none border-b-2 pt-2 pb-1 my-1 pr-2 text-purple-800 hover:text-purple-800 dark:text-purple-800 dark:hover:text-purple-800 hover:border-purple-800 border-purple-800 dark:border-purple-800 transition ease-in-out delay-150 duration-75",
    inactiveClasses:
      "border-b-2 pt-2 pb-1 my-1 pr-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300 transition ease-in-out delay-100 hover:duration-45",
    onShow: () => {
      console.log("tab is shown");
    },
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
                {checkouts.map((checkout) => (
                  <tr className="border-b-2" key={checkout.id}>
                    <td>{checkout.id}</td>
                    <td>{checkout.checkoutID}</td>
                    <td>{checkout.customerEmail}</td>
                    <td>{checkout.price}</td>
                    <td>{checkout.status}</td>
                    <td>{checkout.checkoutTime}</td>
                    <td className="border-none w-[8%]">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <div className="ml-3 inline">
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
                {handleGetListByStatus().Waiting?.map((checkout) => (
                  <tr className="border-b-2" key={checkout.id}>
                    <td>{checkout.id}</td>
                    <td>{checkout.checkoutID}</td>
                    <td>{checkout.customerEmail}</td>
                    <td>{checkout.price}</td>
                    <td>{checkout.status}</td>
                    <td>{checkout.checkoutTime}</td>
                    <td className="border-none w-[8%]">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <div className="ml-3 inline">
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
                {handleGetListByStatus().Delivering?.map((checkout) => (
                  <tr className="border-b-2" key={checkout.id}>
                    <td>{checkout.id}</td>
                    <td>{checkout.checkoutID}</td>
                    <td>{checkout.customerEmail}</td>
                    <td>{checkout.price}</td>
                    <td>{checkout.status}</td>
                    <td>{checkout.checkoutTime}</td>
                    <td className="border-none w-[8%]">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <div className="ml-3 inline">
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
                {checkouts?.map((checkout) => (
                  <tr className="border-b-2" key={checkout.id}>
                    <td>{checkout.id}</td>
                    <td>{checkout.checkoutID}</td>
                    <td>{checkout.customerEmail}</td>
                    <td>{checkout.price}</td>
                    <td>{checkout.status}</td>
                    <td>{checkout.checkoutTime}</td>
                    <td className="border-none w-[8%]">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <div className="ml-3 inline">
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
                {checkouts?.map((checkout) => (
                  <tr className="border-b-2" key={checkout.id}>
                    <td>{checkout.id}</td>
                    <td>{checkout.checkoutID}</td>
                    <td>{checkout.customerEmail}</td>
                    <td>{checkout.price}</td>
                    <td>{checkout.status}</td>
                    <td>{checkout.checkoutTime}</td>
                    <td className="border-none w-[8%]">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <div className="ml-3 inline">
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
    // <div className="px-24 my-2 grid grid-cols-12 gap-6">
    //   {/* State Transaction Tab */}
    //   {/* dark:hover:text-gray-300 */}
    //   <div className="col-span-2">
    //     <ul
    //       className="flex-col text-gray-500 dark:text-gray-400"
    //       id="myTab"
    //       data-tabs-toggle="#myTabContent"
    //       role="tablist"
    //     >
    //       <li className="mr-2 py-2 pr-2" role="presentation">
    //         <button
    //           className={`border-b-2 ${options.inactiveClasses}`}
    //           id="all-tab"
    //           data-tabs-target="#all"
    //           type="button"
    //           role="tab"
    //           aria-controls="all"
    //           aria-selected="false"
    //         >
    //           All
    //         </button>
    //       </li>
    //       <li className="mr-2 py-2 pr-2" role="presentation">
    //         <button
    //           className={`border-b-2 ${options.inactiveClasses}`}
    //           id="waiting-tab"
    //           data-tabs-target="#waiting"
    //           type="button"
    //           role="tab"
    //           aria-controls="waiting"
    //           aria-selected="false"
    //         >
    //           Waiting
    //         </button>
    //       </li>
    //       <li className="mr-2" role="presentation">
    //         Delivering
    //       </li>
    //       <li className="mr-2" role="presentation">
    //         Completed
    //       </li>
    //       <li className="mr-2" role="presentation">
    //         Canceled
    //       </li>
    //     </ul>
    //   </div>
    //   {/* list data */}
    //   <div className="col-span-10" id="myTabContent">
    //     <div
    //       className="hidden"
    //       id="all"
    //       role="tabpanel"
    //       aria-labelledby="all-tab"
    //     >
    //       <table className="">
    //         <tbody>
    //           <tr>
    //             <th>STT</th>
    //             <th>ID</th>
    //             <th>Customer</th>
    //             <th>Price</th>
    //             <th>Status</th>
    //             <th>Checkout Time</th>
    //             <th></th>
    //           </tr>
    //           {checkouts?.map((checkout) => (
    //             <tr className="border-b-2" key={checkout.id}>
    //               <td>{checkout.id}</td>
    //               <td>{checkout.checkoutID}</td>
    //               <td>{checkout.customerEmail}</td>
    //               <td>{checkout.price}</td>
    //               <td>{checkout.status}</td>
    //               <td>{checkout.checkoutTime}</td>
    //               <td className="border-none w-[8%]">
    //                 <FontAwesomeIcon icon={faPenToSquare} />
    //                 <div className="ml-3 inline">
    //                   <FontAwesomeIcon icon={faTrashCan} />
    //                 </div>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //     <div
    //       className="hidden"
    //       id="waiting"
    //       role="tabpanel"
    //       aria-labelledby="waiting-tab"
    //     >
    //       <table className="">
    //         <tbody>
    //           <tr>
    //             <th>STT</th>
    //             <th>ID</th>
    //             <th>Customer</th>
    //             <th>Price</th>
    //             <th>Status</th>
    //             <th>Checkout Time</th>
    //             <th></th>
    //           </tr>
    //           {checkouts?.map((checkout) => (
    //             <tr className="border-b-2" key={checkout.id}>
    //               <td>{checkout.id}</td>
    //               <td>{checkout.checkoutID}</td>
    //               <td>{checkout.customerEmail}</td>
    //               <td>{checkout.price}</td>
    //               <td>{checkout.status}</td>
    //               <td>{checkout.checkoutTime}</td>
    //               <td className="border-none w-[8%]">
    //                 <FontAwesomeIcon icon={faPenToSquare} />
    //                 <div className="ml-3 inline">
    //                   <FontAwesomeIcon icon={faTrashCan} />
    //                 </div>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    //   <ButtonIcon position="bottom" />
    // </div>
  );
};

export default Checkout;

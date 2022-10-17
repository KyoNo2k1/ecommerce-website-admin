import React from "react";
import Chart from "../components/chart";
import ReportProduct from "../components/reportProduct";

//img
import BtnMedium from "../images/Button-Medium.png";
const Report = () => {
  const box_shadow = { boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" };

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
      }
    });
    console.log(result);
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
      }
    });
    console.log(result);
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
    <div className="w-[100%] bg-[#F9F9F9]">
      <div className="w-[90%] ml-[5%] mt-[0%]">
        <div className="grid grid-cols-2 gap-4 gap-x-[20px] bg-[#F9F9F9]">
          <div>
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
                  <option value="DEFAULT" disabled>
                    Monthly
                  </option>
                  <option value="US">January</option>
                  <option value="CA">Feb</option>
                  <option value="FR">March</option>
                  <option value="DE">April</option>
                  <option value="DE">May</option>
                  <option value="DE">June</option>
                  <option value="DE">July</option>
                  <option value="DE">August</option>
                  <option value="DE">September</option>
                  <option value="DE">October</option>
                  <option value="DE">November</option>
                  <option value="DE">December</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  From
                </label>
                <input
                  type="datetime-local"
                  className=" w-[169px] h-[56px] p-[20px]"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  To
                </label>
                <input
                  type="datetime-local"
                  className=" w-[169px] h-[56px] p-[20px]"
                />
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
          <div className="p-[20px] pl-[0px] ml-[8%]">
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-4">
                <div
                  className="text-center text-[white] bg-[#4E4D93] w-[146px] h-[122px] pt-4"
                  style={box_shadow}
                >
                  <p>Orders</p>
                  <p className="text-h3">2.056</p>
                  <img className="ml-12" src={BtnMedium} alt="" />
                </div>
                <div
                  className="text-center text-[white] bg-[#4E4D93] w-[146px] h-[122px] pt-4"
                  style={box_shadow}
                >
                  <p>Orders</p>
                  <p className="text-h3">2.056</p>
                  <img className="ml-12" src={BtnMedium} alt="" />
                </div>
                <div
                  className="text-center text-[white] bg-[#4E4D93] w-[146px] h-[122px] pt-4"
                  style={box_shadow}
                >
                  <p>Orders</p>
                  <p className="text-h3">2.056</p>
                  <img className="ml-12" src={BtnMedium} alt="" />
                </div>
              </div>
              <div className="grid grid-cols-4 mt-4">
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
              </div>
            </div>
          </div>
          <Chart d={chartData} />
          <div className="ml-[8%]">
            {/* table  */}
            <ReportProduct></ReportProduct>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;

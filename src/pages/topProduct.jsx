import React from "react";
import "../styles/topProduct.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const TopProduct = () => {
  const topProduct = [
    {
      id: 1,
      name: "Product Name",
      price: 20.0,
      remain: 200,
      sold: 200,
    },
    {
      id: 2,
      name: "Product Name",
      price: 20.0,
      remain: 200,
      sold: 200,
    },
  ];
  return (
    <div className="mt-3">
      <p className="font-bold">Top Products</p>
      <table className="w-[98%]">
        <tr>
          <th>STT</th>
          <th>Name</th>
          <th>Price</th>
          <th>Remain Quantity</th>
          <th>Sold in this Month</th>
          <th></th>
        </tr>
        {topProduct?.map((item) => (
          <tr className="border-b-2">
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.remain}</td>
            <td className="border-none">{item.sold}</td>
            <td className="border-none">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TopProduct;

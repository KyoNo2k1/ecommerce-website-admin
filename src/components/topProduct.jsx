import React from "react";
import "../styles/topProduct.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const TopProduct = ({ product, count }) => {
  const navigate = useNavigate();
  const handleTopProduct = (id) => {
    navigate(`/Product/Update/${id}`, { state: product });
  };
  return (
    <div className="mt-3">
      <p className="font-bold">Top Products</p>
      <table className="w-[98%]">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Remain Quantity</th>
            <th>Sold Total</th>
            <th></th>
          </tr>
          <tr className="border-b-2" key={product?.uuid}>
            <td>{product?.uuid}</td>
            <td>{product?.name}</td>
            <td>{product?.price}</td>
            <td>{product?.remain}</td>
            <td className="border-none">{count}</td>
            <td className="border-none">
              <div
                onClick={() => handleTopProduct(product?.uuid)}
                className="cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TopProduct;

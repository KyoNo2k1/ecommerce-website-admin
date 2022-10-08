import React from "react";
import "../styles/topProduct.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faAdd } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../components/buttonIcon";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Product Name",
      price: 20.0,
      remainQuantity: 200,
      supplier: "Supplier Name",
      importTime: "02-02-2022",
    },
    {
      id: 2,
      name: "Product Name",
      price: 20.0,
      remainQuantity: 200,
      supplier: "Supplier Name",
      importTime: "02-02-2022",
    },
  ];

  return (
    <div className="px-24 my-2">
      <table className="w-[100%]">
        <tbody>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Price</th>
            <th>Remain Quantity</th>
            <th>Supplier</th>
            <th>Import Time</th>
            <th></th>
          </tr>
          {products?.map((product) => (
            <tr className="border-b-2" key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.remainQuantity}</td>
              <td>{product.supplier}</td>
              <td>{product.importTime}</td>
              <td className="border-none">
                <FontAwesomeIcon icon={faPenToSquare} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ButtonIcon />
    </div>
  );
};

export default Product;

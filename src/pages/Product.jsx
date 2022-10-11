import React, { useEffect } from "react";
import "../styles/topProduct.css";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productSlice/productSlice";
//css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../components/buttonIcon";

//setting
import { timeConvert } from "../components/convertTime";

const Product = () => {
  const { arrProducts } = useSelector((store) => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

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
          {arrProducts?.map((product) => {
            var timeConverted = timeConvert(product.create_date.seconds);
            return (
              <tr className="border-b-2" key={product.uuid}>
                <td>1</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.supplier}</td>
                <td>{timeConverted}</td>
                <td className="border-none w-[8%]">
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <div className="ml-3 inline">
                    <FontAwesomeIcon icon={faTrashCan} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ButtonIcon position="bottom" />
    </div>
  );
};

export default Product;
